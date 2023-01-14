import ITemplate from "../interfaces/ITemplate";

export default class Notify {
  send(template: ITemplate) {
    console.log("Send with", template);
    return Promise.resolve(true);
  }

  connect(connectionString: string) {
    console.log("Connection with", connectionString);
    return Promise.resolve(true);
  }
}
