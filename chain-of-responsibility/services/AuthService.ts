import AuthorizeHandler from "../interfaces/AuthorizeHandler";
import AdminAuthorizeHandler from "../models/AdminAuthorizeHandler";
import ManagerAuthorizeHandler from "../models/ManagerAuthorizeHandler";
import UserAuthorizeHandler from "../models/UserAuthorizeHandler";

export default class AuthService {
  private authHandler: AuthorizeHandler;

  constructor() {
    const userAuthorizeHandler = new UserAuthorizeHandler();
    const managerAuthorizeHandler = new ManagerAuthorizeHandler();
    const adminAuthorizeHandler = new AdminAuthorizeHandler();

    userAuthorizeHandler
      .setNext(managerAuthorizeHandler)
      .setNext(adminAuthorizeHandler);

    this.authHandler = userAuthorizeHandler;
  }

  authorize(name: string, password: string) {
    return this.authHandler.tryAuthorize({ name, password });
  }
}
