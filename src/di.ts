import {
  AuthController,
  RedirectController,
  ViewController,
} from "./controllers";
import { privateRoute } from "./middlewares";
import { AuthService, RemoteAuthService } from "./services/auth";

export const Services = {
  auth: new RemoteAuthService() as AuthService,
};

export const Middlewares = {
  privateRoute,
};

export const Controllers = {
  auth: new AuthController(Services.auth),
  view: ViewController,
  redirect: RedirectController,
};
