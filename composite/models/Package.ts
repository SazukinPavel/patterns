import DeliveryItem from "./DeliveryItem";

export default class Package extends DeliveryItem {
  constructor(private fee: number) {
    super();
  }

  getPrice(): number {
    return super.getPrice() + this.fee;
  }
}
