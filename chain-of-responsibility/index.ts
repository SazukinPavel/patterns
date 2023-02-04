import LoginDto from "./models/LoginDto";
import AuthService from "./services/AuthService";

const loginDto1: LoginDto = { name: "Tom", password: "1234" };
const loginDto2: LoginDto = { name: "Mike", password: "133" };
const loginDtoWrong: LoginDto = { name: "Polineli Tomerts", password: "some" };
const loginDto3: LoginDto = { name: "Pol", password: "4532" };

const authService = new AuthService();

console.log(authService.authorize(loginDto1.name, loginDto1.password));
console.log(authService.authorize(loginDto2.name, loginDto2.password));
console.log(authService.authorize(loginDtoWrong.name, loginDtoWrong.password));
console.log(authService.authorize(loginDto3.name, loginDto3.password));
