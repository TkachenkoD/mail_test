const pc = {
  sg: {
    pro: [
      "Transactional email services allow to send email from app using hosted API.",
      "Reliable service that can be integrated quickly",
      "Support high-volume sending",
      "Good functionality in free or low-cost plans (100 emails/day forever)",
      "Comprehensive documentation",
      "Ability to use DKIM parameters",
      "<a target='_blanc' href='https://sendgrid.com/blog/10-tips-to-keep-email-out-of-the-spam-folder/#authenticate'>https://sendgrid.com/blog/10-tips-to-keep-email-out-of-the-spam-folder/#authenticate</a>",
      "Monitoring, such as whether emails are delivered, as well as web analytics and reporting",
      "A lot of information for security settigs (DKIM, SPF documentaion provided by service)",
      "A lot of settings can adjusted from browser, which is good for non developers",

    ],
    cons: [
      "relying on a third-party to handle emails",
      "spend some time researching their features, email deliverability rates, and API documentation.",
      "Hard to add and veify new senders",
      "For sending emails from many different senders needs to be set domain or need to add each sender manualy"
    ],
  },
  mg: {
    pro: [
      "Transactional email services allow to send email from app using hosted API.",
      "Reliable service that can be integrated quickly",
      "Support high-volume sending",
      "Good functionality of low-cost plans (free plans limited with 3 months)",
      "Easy to add new senders",
      "Comprehensive documentation",
      "Monitoring, web analytics and reporting with browser and api availiable (good for non-dev and dev persons)",
      "A lot of information for security settigs (DKIM, SPF documentaion provided by service)",
      "<a target='_blank' href='https://www.mailgun.com/blog/understanding-dkim-how-it-works/'> https://www.mailgun.com/blog/understanding-dkim-how-it-works/</a>",
      "<a target='_blank' href='https://www.mailgun.com/blog/improve-your-email-delivery-rate/'> https://www.mailgun.com/blog/improve-your-email-delivery-rate/</a>",
      "A lot of settings can be adjusted from browser, which is good for non-developers",
    ],
    cons: [
      "Relying on a third-party to handle emails",
      "Not free, need mothly charge, after 3 month trial",
      "Need to link card account for option to send mail to anybody, ohterwise only to authorized recipients (trial plan)",
      "that's why here added 'Recivers' select dropdown with authorized recipients",
    ],
  },
  nm: {
    pro: [
      "We can use any SMTP transport(server, Gmail, SES, etc) with Nodemailer (even our own SMTP)",
      "Advantage of SMTP is that it’s widely adopted and easy to set up and integrate",
      "Control over every aspect of email sending.",
      "Ability to set DKIM parameters",
      "<a target='_blank' href='https://nodemailer.com/dkim/'>https://nodemailer.com/dkim/</a>",
      "Gmail or Yahoo provide up to 99 mesages per day for free (Recipients per message sent via Google SMTP - 100",
      "<a target='_blank' href='https://support.google.com/a/answer/166852?hl=en'>(https://support.google.com/a/answer/166852?hl=en)</a>"
    ],
    cons: [
      "SMTP server relies on shared IPs that cannot guarantee you a full deliverability",
      "as they be used also by spammers who harm seriously their reputation",
      "The major drawback of SMTP is it can be insecure and easily hacked. ",
      "SMTP protocol is susceptible to DDoS attacks, phishing, and data breaches",
      "User is responsible for long-term maintenance, which requires a lot of ongoing efforts",
    ],
  }
}
export default pc