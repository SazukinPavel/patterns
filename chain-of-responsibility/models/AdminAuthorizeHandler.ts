import BaseAuthorizeHandler from "./BaseAuthorizeHandler";
import LoginDto from "./LoginDto";

export default class AdminAuthorizeHandler extends BaseAuthorizeHandler {
  private admins: LoginDto[] = [
    { name: "Pol", password: "4532" },
    { name: "Robert", password: "321" },
  ];

  tryAuthorize(loginDto: LoginDto) {
    const isSameAdminExists = this.admins.find(
      (a) => a.name === loginDto.name && a.password === loginDto.password
    );

    if (isSameAdminExists) {
      return "admin";
    }

    return this.nextHandler && this.nextHandler.tryAuthorize(loginDto);
  }
}
