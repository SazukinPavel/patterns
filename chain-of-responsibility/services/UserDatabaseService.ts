import LoginDto from "../models/LoginDto";
import User from "../models/User";
import { Role } from "../types/Role";

export default class UserDatabaseService {
  private users: User[] = [
    { name: "Pol", password: "4532", role: "admin" },
    { name: "Robert", password: "321", role: "admin" },
    { name: "Tom", password: "1234", role: "user" },
    { name: "Sam", password: "321", role: "user" },
    { name: "Mike", password: "133", role: "manager" },
    { name: "Robert", password: "321", role: "manager" },
  ];

  private findUser({ name, password }: LoginDto, role: Role) {
    return this.users.find(
      (u) => u.name === name && u.password === password && u.role === role
    );
  }

  findUserTypeUser(loginDto: LoginDto) {
    return this.findUser(loginDto, "user");
  }

  findUserTypeManager(loginDto: LoginDto) {
    return this.findUser(loginDto, "manager");
  }

  findUserTypeAdmin(loginDto: LoginDto) {
    return this.findUser(loginDto, "admin");
  }
}
