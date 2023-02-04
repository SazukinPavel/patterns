import LoginDto from "../models/LoginDto";
import { Role } from "../types/Role";

export default interface AuthorizeHandler {
  setNext(handler: AuthorizeHandler): AuthorizeHandler;
  tryAuthorize(loginDto: LoginDto): Role | null;
}
