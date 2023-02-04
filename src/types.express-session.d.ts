import { Session, SessionData } from "express-session";

declare module "express-session" {
  interface SessionData {
    token: string;
  }
}

declare namespace Express {
  export interface Request {
    session: Session & Partial<SessionData>;
  }
}
