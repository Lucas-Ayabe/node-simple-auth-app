import { RequestHandler } from "express";

export const privateRoute: RequestHandler = (req, res, next) => {
  if (req.session.token) next();
  else res.redirect("/login");
};
