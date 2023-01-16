import IClient from "../interfaces/IClient";
import IPayment from "../interfaces/IPayment";
import IPaymentApi from "../interfaces/IPaymentApi";

export default class PaymentProxyService implements IPaymentApi {
  private authorizeClients: IClient[] = [];

  constructor(private paymentApi: IPaymentApi) {}

  payment(subject: IClient, summary: number): IPayment {
    if (this.authorizeClients.findIndex((c) => subject.id === c.id) === -1) {
      throw new Error(`${subject} not authorize`);
    }

    return this.paymentApi.payment(subject, summary);
  }

  getHistory(): IPayment[] {
    return this.paymentApi.getHistory();
  }

  registerClient(client: IClient) {
    this.authorizeClients.push(client);
    console.log(client, " was register");
  }
}
