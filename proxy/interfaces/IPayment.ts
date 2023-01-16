import IClient from "./IClient";

export default interface IPayment {
  sender: IClient;
  subject: IClient;
  summary: number;
  createDate: Date;
}
