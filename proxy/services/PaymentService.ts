import IClient from "../interfaces/IClient";
import IPayment from "../interfaces/IPayment";
import IPaymentApi from "../interfaces/IPaymentApi";

export default class PaymentService implements IPaymentApi {
  private payments: IPayment[] = [];

  constructor(private client: IClient) {}

  payment(subject: IClient, summary: number): IPayment {
    if (this.client.cash < summary) {
      throw new Error(`Client have'nt ${summary} money`);
    }

    const payment: IPayment = {
      sender: this.client,
      subject,
      summary,
      createDate: new Date(Date.now()),
    };

    this.client.cash -= summary;
    subject.cash += summary;

    this.payments.push(payment);

    return payment;
  }

  getHistory(): IPayment[] {
    return this.payments;
  }
}
