const axios = require('axios');
const bodyParser = require('body-parser');
const express = require('express');
const Pusher = require('pusher');
const Webtask = require('webtask-tools');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const server = express();

server.use((req, res, next) => {
  const secrets = req.webtaskContext.secrets;
  const validateAccessToken = jwt({
    // Dynamically provide a signing key based on the kid
    // in the header and the singing keys provided by the JWKS endpoint.
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://${secrets.AUTH0_DOMAIN}/.well-known/jwks.json`,
    }),

    // Validate the audience and the issuer.
    audience: secrets.AUTH0_AUDIENCE,
    issuer: `https://${secrets.AUTH0_DOMAIN}/`,
    algorithms: ['RS256'],
  });
  return validateAccessToken(req, res, next);
});

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.post('/pusher/auth', (req, res) => {
  const secrets = req.webtaskContext.secrets;
  const socketId = req.body.socket_id;
  const channel = req.body.channel_name;

  console.log(req.headers.authorization);

  const profileRequestConfig = {
    method: 'get',
    url: 'https://bkrebs.auth0.com/userinfo',
    headers: {
      Authorization: req.headers.authorization,
    },
  };

  axios(profileRequestConfig)
    .then((profileResponse) => {
      const presenceData = {
        user_id: profileResponse.data.sub,
        user_info: {
          name: profileResponse.data.nickname || profileResponse.data.name,
          picture: profileResponse.data.picture,
          maxScore: 0,
        },
      };

      const pusher = new Pusher({
        appId: secrets.PUSHER_APP_ID,
        key: secrets.PUSHER_KEY,
        secret: secrets.PUSHER_SECRET,
        cluster: secrets.PUSHER_CLUSTER,
        encrypted: secrets.PUSHER_ENCRYPTED,
      });

      const auth = pusher.authenticate(socketId, channel, presenceData);
      res.send(auth);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send(error);
    });
});

module.exports = Webtask.fromExpress(server);
