import BaseAuthorizeHandler from "./BaseAuthorizeHandler";
import LoginDto from "./LoginDto";

export default class ManagerAuthorizeHandler extends BaseAuthorizeHandler {
  private managers: LoginDto[] = [
    { name: "Mike", password: "133" },
    { name: "Robert", password: "321" },
  ];

  tryAuthorize(loginDto: LoginDto) {
    const isSameManagerExists = this.managers.find(
      (m) => m.name === loginDto.name && m.password === loginDto.password
    );

    if (isSameManagerExists) {
      return "manager";
    }

    return this.nextHandler && this.nextHandler.tryAuthorize(loginDto);
  }
}
