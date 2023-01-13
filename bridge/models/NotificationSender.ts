import IMessage from "../interfaces/IMessage";
import IProvider from "../interfaces/IProvider";

export default class NotificationSender {
  protected provider: IProvider;

  constructor(provider: IProvider, connectionString: string) {
    this.provider = provider;

    provider.connect(connectionString);
  }

  sendMessage(message: IMessage) {
    return this.provider.send(message);
  }

  disconect() {
    this.provider.disconect();
  }
}
