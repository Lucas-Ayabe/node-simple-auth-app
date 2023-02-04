import { Request, Response } from "express";

export const ViewController = (view: string) => {
  return (_: Request, res: Response) => {
    res.render(view);
  };
};
