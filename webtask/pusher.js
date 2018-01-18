const express = require('express');
const bodyParser = require('body-parser');
const Pusher = require('pusher');
const Webtask = require('webtask-tools');

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.post('/pusher/auth', (req, res) => {
  const socketId = req.body.socket_id;
  const channel = req.body.channel_name;
  const presenceData = {
    user_id: (new Date()).getTime(),
    user_info: {
      name: `User ${(new Date()).getTime()}`,
      twitter_id: `@pusher-${(new Date()).getTime()}`,
    },
  };

  const secrets = req.webtaskContext;

  const pusher = new Pusher({
    appId: secrets.PUSHER_APP_ID,
    key: secrets.PUSHER_KEY,
    secret: secrets.PUSHER_SECRET,
    cluster: secrets.PUSHER_CLUSTER,
    encrypted: secrets.PUSHER_ENCRYPTED,
  });

  const auth = pusher.authenticate(socketId, channel, presenceData);
  res.send(auth);
});

module.exports = Webtask.fromExpress(server);
