import { Request, Response } from "express";

export const RedirectController = (destination: string) => {
  return (_: Request, res: Response) => {
    res.redirect(destination);
  };
};
