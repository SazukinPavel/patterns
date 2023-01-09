import IClonable from "../interfaces/IClonable";
import Message from "./Message";
import User from "./User";

export default class UserHistory implements IClonable {
  private messages: Message[];

  constructor(private user: User) {
    this.messages = [];
  }

  addMessage(text: string, sender?: User) {
    this.messages.push(new Message(text, sender ?? this.user));
  }

  getMessages() {
    return this.messages;
  }

  clone() {
    const target = new UserHistory(this.user.clone());
    const messages = this.messages.map((m) => m.clone());
    target.messages = messages;

    return target;
  }
}
