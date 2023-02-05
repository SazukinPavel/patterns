import BaseAuthorizeHandler from "./BaseAuthorizeHandler";
import LoginDto from "./LoginDto";

export default class UserAuthorizeHandler extends BaseAuthorizeHandler {
  tryAuthorize(loginDto: LoginDto) {
    const isSameUserExists =
      this.userDatabaseService.findUserTypeUser(loginDto);

    if (isSameUserExists) {
      return "user";
    }

    return this.nextHandler && this.nextHandler.tryAuthorize(loginDto);
  }
}
