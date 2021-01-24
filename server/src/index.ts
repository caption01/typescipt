import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";

import { router } from "./routes/loginRoutes";
import { AppRouter } from "./AppRouter";

import "./controller/logginController";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["secret"] }));

app.use(router);
app.use(AppRouter.getInstance());

app.listen(3001, () => {
  console.log("server running on 3001");
});
