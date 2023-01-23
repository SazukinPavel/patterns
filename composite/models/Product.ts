import DeliveryItem from "./DeliveryItem";

export default class Product extends DeliveryItem {
  constructor(protected price: number, protected name: string) {
    super();
  }

  getPrice(): number {
    return this.price;
  }
}
