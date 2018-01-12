# Deploying Bang! Bang! on Digituz

## Cloning the Repository

```bash
git clone https://github.com/auth0-blog/bang-bang-react-game ~/git/bang-bang-react-game
cd ~/git/bang-bang-react-game
```

## Creating Docker Instances

First, if not already existent, we need to create a Docker network:

```bash
DIGITUZ_NETWORK=digituz

docker network create $DIGITUZ_NETWORK
```

After that, we can bootstrap Bang! Bang!:

```bash
docker build -t bang-bang .

docker run --name bang-bang --network digituz -d bang-bang
```
