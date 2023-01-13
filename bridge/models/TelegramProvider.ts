import IMessage from "../interfaces/IMessage";
import IProvider from "../interfaces/IProvider";

export default class TelegramProvider implements IProvider {
  send(message: IMessage): Promise<boolean> {
    console.log("Send tg message ", message);

    return Promise.resolve(true);
  }
  connect(connectionString: string): Promise<boolean> {
    console.log("connection tg on ", connectionString);

    return Promise.resolve(true);
  }
  disconect(): void {
    console.log("disconect tg");
  }
}
