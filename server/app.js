import express from "express";
import devBundle from './devBundle'
import path from 'path'
import cors from "cors";
import template from './../template'
import emailRouter from "./routes/email-router.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";
import { config } from "dotenv";
config();

const app = express();
devBundle.compile(app)
app.set("json spaces", 4);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));

app.use(
  cors({
    origin: "*", //["http://localhost:3000"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 200,
  })
);

const CURRENT_WORKING_DIR = process.cwd()
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))
app.get('/', (req, res) => {
  res.status(200).send(template())
})

app.use("/api/emails", emailRouter);
app.use(errorMiddleware);

const PORT = process.env.PORT || 5001;

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}`));
  } catch (e) {
    console.log("Server Error", e.message);
    process.exit(1);
  }
};

start();
