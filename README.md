# @palmabit/strapi-provider-email-mandrill

## Links

- [Strapi website](https://strapi.io/)
- [Strapi documentation](https://docs.strapi.io)

## Installation

```bash
# using yarn
yarn add @palmabit/strapi-provider-email-mandrill

# using npm
npm install @palmabit/strapi-provider-email-mandrill --save
```

## Example

**Path -** `config/plugins.js`

```js
module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: '@palmabit/strapi-provider-email-mandrill',
      providerOptions: {
        auth: {
          apiKey: env('MANDRILL_KEY', ''),
        },
        // ... any custom options
      },
      settings: {
        defaultFrom: 'hello@example.com',
        defaultReplyTo: 'hello@example.com',
      },
    },
  },
  // ...
});
```

### Development mode

You can override the default configurations for specific environments. E.g. for
`NODE_ENV=development` in **config/env/development/plugins.js**:

## Usage

> :warning: The Shipper Email (or defaultfrom) may also need to be changed in the `Email Templates` tab on the admin panel for emails to send properly

To send an email from anywhere inside Strapi:

```js
await strapi
  .plugin('email')
  .service('email')
  .send({
    to: 'someone@example.com',
    from: 'someone2@example.com',
    subject: 'Hello world',
    text: 'Hello world',
    html: `<h4>Hello world</h4>`,
  });
```

The following fields are supported:

| Field       | Description                                                       |
| ----------- | ----------------------------------------------------------------- |
| from        | Email address of the sender                                       |
| to          | Comma separated list or an array of recipients                    |
| replyTo     | Email address to which replies are sent                           |
| cc          | Comma separated list or an array of recipients                    |
| bcc         | Comma separated list or an array of recipients                    |
| subject     | Subject of the email                                              |
| text        | Plaintext version of the message                                  |
| html        | HTML version of the message                                       |
| attachments | Array of objects See: https://nodemailer.com/message/attachments/ |
