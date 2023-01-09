import IClonable from "../interfaces/IClonable";

export default class User implements IClonable {
  private id: string;

  constructor(private username: string) {
    this.id = Date.now().toString();
  }

  clone() {
    const target = new User(this.username);
    target.id = this.id;

    return target;
  }

  toString() {
    return `${this.username} ${this.id}`;
  }
}
