import IClient from "./IClient";
import IPayment from "./IPayment";

export default interface IPaymentApi {
  payment(subject: IClient, summary: number): IPayment;
  getHistory(): IPayment[];
}
