import { Role } from "../types/Role";

export default class User {
  name: string;
  role: Role;
  password: string;

  constructor(name: string, role: Role, password: string) {
    this.name = name;
    this.role = role;
    this.password = password;
  }
}
