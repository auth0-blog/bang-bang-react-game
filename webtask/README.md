## Pusher Client Presence and Auth0 Integration

You will use the `pusher.js` script to make Pusher fetch identity details from users connecting to the *Aliens, Go Home!* game.

In the last section, you will find commands to deploy the `pusher.js` Webtask with keys created especially to this game. Obviously, you will need a Pusher account and a Webtask account. Both services provide free tiers capable of handling the requirements of this game.

### Creating the Webtask Account

To create your account on Webtask, you can use the following commands:

```bash
npm install wt-cli -g

wt init some-email@address.com
```

Instead of an email address, you might be able to sign-up with a phone number as well. Either way, you will have to prove that you own the email address, or the phone, by typing a verification code.

### Creating the Pusher Account

To create your free Pusher account, you can head to [the Pusher Sign Up page](https://pusher.com/signup) and choose one of the three options available (GitHub social connection, Google social connection, or the classic email and password combination). Choosing one of the social connections will speed up the process.

After being authenticated, Pusher will welcome you with a form that asks details about your first app. You can call it `aliens-go-home` to easily remember later. After creating the app, Pusher will redirect you to a page with several tabs. By default, Pusher sends you to the *Getting Started* tab, but you only use the *App Keys* tab in this article. You can click on this tab now and leave it opened. You will shortly copy the properties shown on it.

### Deploying the Pusher Script to Webtask

```bash
wt create pusher.js --secrets-file env.variables
```

