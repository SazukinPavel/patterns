import IClonable from "../interfaces/IClonable";
import User from "./User";

export default class Message implements IClonable {
  constructor(private text: string, private sender: User) {}

  clone() {
    const target = new Message(this.text, this.sender.clone());
    return target;
  }
}
