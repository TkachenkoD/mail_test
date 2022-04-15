const info = {
  descr: [
    "1. Schedule mail sending",
    "2. Show inbox and incoming mail (Imap conf of client)",
    "3. Send email with custom SMTP config",
    "4. Send attachement",
    "5. Guarantee to not be in spam",
    "6. Know if email had been received",
    "7. Know if email had been opened",
    "8. Most secure way to send mails",
    "9. Make sure IP is not black listed",
    "10. Standard data retention/For how long can you access your email insights?",
    "11. API developer docs"
  ],
  sg: [
    "covered with api. Implemented, works as expected, but have some limitations - schedule for 72 hours ahead",
    "SendGrid’s Inbound Parse Webhook allows to receive emails as multipart/form-data at a URL. SendGrid will grab the content, attachments, and the headers from any email it receives for specified hostname. Processing email needs to setup MX Records. Not tested, not implemented (https://docs.sendgrid.com/api-reference/settings-inbound-parse/create-a-parse-setting)",
    "Genertates Api Key to get sendgrid services. Tested with demo project. SendGrid’s SMTP API also allows  to specify custom email handling instructions using a JSON encoded list called the X-SMTPAPI header.  - object (key-value pairs) for example Scheduling Your Send, BCC Behavior, Substitution Tags (https://docs.sendgrid.com/for-developers/sending-email/building-an-x-smtpapi-header)",
    "covered with api. not implemented purposly - claimed as basic functionality",
    "https://sendgrid.com/blog/10-tips-to-keep-email-out-of-the-spam-folder/#authenticate",
    "SG provides email activity feed (https://docs.sendgrid.com/ui/analytics-and-reporting/email-activity-feed)",
    "-",
    "-",
    "-",
    "3 days (on the Essentials plan. Pro and Premier plans come with 7 days of email history. Extensions are available at an extra charge)",
    "https://docs.sendgrid.com/for-developers/sending-email/api-getting-started",
  ],
  mg: [
    "covered with Cron Job(NODE JS), + 3 days ahead for scheduleing mails",
    "Mailgun allows you to receive emails through Routes. List of routes to handle incoming emails -  This idea of routes is borrowed from MVC web frameworks like Django or Ruby on Rails: if a message matches a route expression, Mailgun can forward it to your application via HTTP or to another email address or store the message temporarily (3 days) for subsequent retrieval.",
    "Same pattern as SG with Api Key, or SMPT settigs",
    "-",
    "same",
    "Spam Checker is an option within SendGrid Mail Settings that checks outbound messages for spam content.",
    "trakcking is enable with wedhooks (status deliverd - tested, good) opend  - need to pay (https://documentation.mailgun.com/en/latest/user_manual.html#tracking-messages-1)",
    "-",
    "-",
    "5 days (On the Flex and Foundation plans. On higher plans, logs are retained for up to 30 days, messages for up to 7 days) ",
    "https://documentation.mailgun.com/en/latest/api_reference.html",
  ],
  nm: [
    "covrered with job scheduler for Node.js (Bree)",
    "Implemented and tested, integrated with React. Flexible solution for managing INBOX, SENT, DRAFTS folders ",
    "Adjustible parameters: SMTP host,  SMTP password, SMTP user,  SMTP port, SSL/TLC flag. this set is standard for most of libraries we have used (Nodemailer -node js), Mail.dll - .NET)",
    "works well as part of library functionality",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ],
}
export default info