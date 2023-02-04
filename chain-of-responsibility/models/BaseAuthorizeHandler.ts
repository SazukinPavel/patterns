import AuthorizeHandler from "../interfaces/AuthorizeHandler";
import { Role } from "../types/Role";
import LoginDto from "./LoginDto";

export default abstract class BaseAuthorizeHandler implements AuthorizeHandler {
  protected nextHandler: AuthorizeHandler | null = null;

  setNext(handler: AuthorizeHandler): AuthorizeHandler {
    this.nextHandler = handler;
    return handler;
  }

  abstract tryAuthorize(loginDto: LoginDto): Role | null;
}
