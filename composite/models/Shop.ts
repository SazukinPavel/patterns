import DeliveryItem from "./DeliveryItem";

export default class Shop extends DeliveryItem {
  constructor(private fee: number) {
    super();
  }

  getPrice(): number {
    return super.getPrice() + this.fee;
  }
}
