// import HttpStatus from "http-status-codes";
import * as emailService from "../services/email.service.js";

export const getEmails = async (req, res, next) => {
  try {
    const limit = req.query.limit !== undefined ? Number(req.query.limit) : 5;
    const offset = req.query.offset !== undefined ? Number(req.query.offset) : 0;
    const folder = req.query.folder !== undefined ? req.query.folder : "INBOX";

    const mails = await emailService.getEmails(limit, offset, folder);

    return res.status(200).json({ mails });
  } catch (error) {
    next(error);
  }
};

export const getUnseenEmails = async (req, res, next) => {
  try {
    const mails = await emailService.getUnseenEmails(req.query);

    return res.status(200).json({ mails });
  } catch (error) {
    next(error);
  }
};

export const getEmailById = async (req, res, next) => {
  try {
    const folder = req.query.folder !== undefined ? req.query.folder : "INBOX";
    const { id } = req.params;
    const mail = await emailService.getEmailById(id, folder);

    return res.status(200).json({ mail });
  } catch (error) {
    next(error);
  }
};

export const deleteEmailById = async (req, res, next) => {
  try {
    const folder = req.query.folder !== undefined ? req.query.folder : "INBOX";
    const { id } = req.params;
    const result = await emailService.deleteEmailById(id, folder);

    return res.status(200).json({ deleted: result });
  } catch (error) {
    next(error);
  }
};

export const moveEmailById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const from = req.query.from !== undefined ? req.query.from : "INBOX";
    const to = req.query.to !== undefined ? req.query.to : "[Gmail]/Корзина";
    await emailService.moveEmailById(id, from, to);

    return res.status(200).json("OK");
  } catch (error) {
    next(error);
  }
};

export const getMailboxesTree = async (req, res, next) => {
  try {
    const response = await emailService.getMailboxesTree();

    return res.status(200).json({ ...response });
  } catch (error) {
    next(error);
  }
};

export const sendEmail = async (req, res, next) => {
  try {
    const { message } = req.body;
    const mails = await emailService.sendEmail(message);

    return res.status(200).json({ mails });
  } catch (error) {
    next(error);
  }
};

export const sendEmailByMailgun = async (req, res, next) => {
  try {
    const { message } = req.body;
    const mails = await emailService.sendEmailByMailgun(message);

    return res.status(200).json({ mails });
  } catch (error) {
    next(error);
  }
};

export const webhook = async (req, res, next) => {
  try {
    console.log("🚀 req.body", JSON.stringify(req.body, null, 2));

    return res.status(200).end();
  } catch (error) {
    next(error);
  }
};

//send mail with sendgrid api
export const sendEmailBySG = async (req, res, next) => {
  try {
    const { message } = req.body;

    //Schedule
    //When passing send_at or send_each_at please make sure to only use UNIX timestamps passed as integers
    // let time = Math.floor(new Date('2022-04-12 17:58:55').getTime() / 1000)

    // const msg = {
    //   from: 'yarikpetrovsk@gmail.com',
    //   personalizations: [
    //     {
    //       // from: {
    //       //   email: 'yarikpetrovsk@gmail.com'
    //       // },
    //       "to": [
    //         {
    //           "email": message.to,

    //         }
    //       ],
    //       // "send_at": time,
    //       "cc": [
    //         {
    //           "email": "16line.36.21@gmail.com"
    //         }
    //       ],
    //       // "send_at": time,
    //       "subject": message.subject
    //     }
    //   ],
    //   text: message.text,
    // }

    const msg = {
      to: message.to, // Change to your recipient
      from: 'yarikpetrovsk@gmail.com', // Change to your verified sender IT must be verified!!!
      subject: message.subject,
      // text: 'and easy to do anywhere, even with Node.js',
      text: message.text,
      // cc: '16line.36.21@gmail.com',
    }

    const mails = await emailService.sendEmailBySG(msg);

    return res.status(200).json({ mails });
  } catch (error) {
    next(error);
  }
};