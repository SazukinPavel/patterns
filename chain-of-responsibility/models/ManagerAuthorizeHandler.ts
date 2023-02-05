import BaseAuthorizeHandler from "./BaseAuthorizeHandler";
import LoginDto from "./LoginDto";

export default class ManagerAuthorizeHandler extends BaseAuthorizeHandler {
  tryAuthorize(loginDto: LoginDto) {
    const isSameManagerExists =
      this.userDatabaseService.findUserTypeManager(loginDto);

    if (isSameManagerExists) {
      return "manager";
    }

    return this.nextHandler && this.nextHandler.tryAuthorize(loginDto);
  }
}
