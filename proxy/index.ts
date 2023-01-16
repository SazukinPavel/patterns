import Client from "./models/Client";
import PaymentProxyService from "./services/PaymentProxyService";
import PaymentService from "./services/PaymentService";

const client1 = new Client("mark", "1", 1000);
const client2 = new Client("john", "2", 0);

console.log("base payment service");

const paymentService = new PaymentService(client1);

try {
  paymentService.payment(client2, 1500);
} catch (e) {
  console.log(e);
}

console.log(paymentService.payment(client2, 200));

console.log(paymentService.payment(client2, 300));

console.log(paymentService.getHistory());

console.log(client1.toString(), client2.toString());

console.log("proxy payment service");

const paymentProxyService = new PaymentProxyService(
  new PaymentService(client2)
);

try {
  paymentProxyService.payment(client1, 200);
} catch (e) {
  console.log(e);
}

paymentProxyService.registerClient(client1)

console.log(paymentProxyService.payment(client1, 200));

console.log(paymentProxyService.payment(client1, 300));

console.log(paymentProxyService.getHistory());

console.log(client1.toString(), client2.toString());
