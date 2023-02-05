import BaseAuthorizeHandler from "./BaseAuthorizeHandler";
import LoginDto from "./LoginDto";

export default class AdminAuthorizeHandler extends BaseAuthorizeHandler {
  tryAuthorize(loginDto: LoginDto) {
    const isSameAdminExists =
      this.userDatabaseService.findUserTypeAdmin(loginDto);

    if (isSameAdminExists) {
      return "admin";
    }

    return this.nextHandler && this.nextHandler.tryAuthorize(loginDto);
  }
}
