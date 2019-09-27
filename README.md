# Send an email from Node.js

## How to

### Install dependencies

```bash
npm install
```

### Create a MailTrap account

Go to [MailTrap](https://mailtrap.io/) and create a free account if you don't have one already.

### Change the config object

Gather your username and password for the MailTrap service and update the `config.auth` object accordingly.

### Update the message

Update the message content if you need to.

### Test

Send a test email. Just run the `send` npm command:
```bash
npm run send
```

This will use the `config` and `message` objects inside `index.js` and send email with the MailTrap service.

Head back to your MailTrap account and you should see the recently sent email there.


Ref: https://stackabuse.com/how-to-send-emails-with-node-js/
