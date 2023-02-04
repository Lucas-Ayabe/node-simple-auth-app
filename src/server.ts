import express from "express";
import session from "express-session";
import path from "path";

import { Controllers, Middlewares } from "./di";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/", Controllers.redirect("/login"));

app.get("/login", Controllers.view("login-form"));
app.post("/login", Controllers.auth.login);
app.get("/logout", Controllers.auth.logout);

app.get("/private", Middlewares.privateRoute, Controllers.view("private-page"));

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
