import IClient from "../interfaces/IClient";

export default class Client implements IClient {
  id: string;
  name: string;
  cash: number;

  constructor(id: string, name: string, cash: number) {
    this.id = id;
    this.cash = cash;
    this.name = name;
  }

  toString() {
    return `Client ${this.name} with id ${this.id}; cash ${this.cash}`;
  }
}
