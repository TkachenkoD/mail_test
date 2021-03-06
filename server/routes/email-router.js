import { Router } from "express";
import * as emailController from "../controllers/email.controller.js";

const emailRouter = Router();

emailRouter.get("/list", emailController.getEmails);
emailRouter.get("/unseen", emailController.getUnseenEmails);
emailRouter.get("/email/:id", emailController.getEmailById);
emailRouter.get("/mailboxesTree", emailController.getMailboxesTree);
emailRouter.post("/", emailController.sendEmail);
emailRouter.post("/mailgun", emailController.sendEmailByMailgun);
emailRouter.delete("/email/:id", emailController.deleteEmailById);
emailRouter.post("/email/:id", emailController.moveEmailById);
emailRouter.post("/webhook", emailController.webhook);
emailRouter.post("/sendsg", emailController.sendEmailBySG);

export default emailRouter;
