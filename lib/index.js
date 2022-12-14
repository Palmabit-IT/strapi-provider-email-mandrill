'use strict';

/**
 * Module dependencies
 */

const _ = require('lodash');
const nodemailer = require('nodemailer');
const mandrillTransport = require('nodemailer-mandrill-transport');

const emailFields = [
  'from',
  'replyTo',
  'to',
  'cc',
  'bcc',
  'subject',
  'text',
  'html',
  'attachments',
];

module.exports = {
  provider: '@palmabit/strapi-provider-email-mandrill',
  name: 'Mandrill',

  init(providerOptions = {}, settings = {}) {
    const transporter = nodemailer.createTransport(mandrillTransport(providerOptions));

    return {
      send(options) {
        // Default values.
        const emailOptions = {
          ..._.pick(options, emailFields),
          from: options.from || settings.defaultFrom,
          replyTo: options.replyTo || settings.defaultReplyTo,
          subject: options.subject || '',
          text: options.text || options.html,
          html: options.html || options.text,
        };

        return transporter.sendMail(emailOptions);
      },
    };
  },
};
