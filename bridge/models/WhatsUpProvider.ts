import IMessage from "../interfaces/IMessage";
import IProvider from "../interfaces/IProvider";

export default class WhatsUpProvider implements IProvider {
  send(message: IMessage): Promise<boolean> {
    console.log("Send whatsup message ", message);

    return Promise.resolve(true);
  }
  connect(connectionString: string): Promise<boolean> {
    console.log("connection whatsup on ", connectionString);

    return Promise.resolve(true);
  }
  disconect(): void {
    console.log("disconect whatsup");
  }
}
