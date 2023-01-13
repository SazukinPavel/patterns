import IMessage from "./IMessage";

export default interface IProvider {
  send(message: IMessage): Promise<boolean>;
  connect(connectionString: string): Promise<boolean>;
  disconect(): void;
}
