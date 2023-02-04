import { Request, Response } from "express";
import { AuthService } from "../services/auth";

/**
 * atuny0 - 9uQFF1Lh
 */

export class AuthController {
  constructor(private auth: AuthService) {
    this.login = this.login.bind(this);
  }

  login(request: Request, response: Response) {
    const { username, password } = request.body;
    this.auth
      .authenticate(username, password)
      .then((token) => {
        request.session.regenerate(() => {
          request.session.token = token;
          response.redirect("/private");
        });
      })
      .catch(() => response.redirect("/login"));
  }

  logout(request: Request, response: Response) {
    request.session.destroy(() => response.redirect("/"));
  }
}
