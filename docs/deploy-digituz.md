# Deploying Auth0 Generic Client on Digituz

## Cloning the Repository

```bash
git clone https://github.com/brunokrebs/angular-auth0-generic-client ~/git/angular-auth0-generic-client
cd ~/git/angular-auth0-generic-client
```

## Creating Docker Instances

First, we need to create a Docker network:

```bash
DIGITUZ_NETWORK=digituz

docker network create $DIGITUZ_NETWORK
```

After that, we can bootstrap Auth0 Generic Client:

```bash
docker build -t angular-auth0 .

docker run --name angular-auth0 --network digituz -d angular-auth0
```
