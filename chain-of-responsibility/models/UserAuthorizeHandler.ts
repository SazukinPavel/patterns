import BaseAuthorizeHandler from "./BaseAuthorizeHandler";
import LoginDto from "./LoginDto";

export default class UserAuthorizeHandler extends BaseAuthorizeHandler {
  private users: LoginDto[] = [
    { name: "Tom", password: "1234" },
    { name: "Sam", password: "321" },
  ];

  tryAuthorize(loginDto: LoginDto) {
    const isSameUserExists = this.users.find(
      (u) => u.name === loginDto.name && u.password === loginDto.password
    );

    if (isSameUserExists) {
      return "user";
    }

    return this.nextHandler && this.nextHandler.tryAuthorize(loginDto);
  }
}
