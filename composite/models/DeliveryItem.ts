export default abstract class DeliveryItem {
  protected items: DeliveryItem[];

  constructor() {
    this.items = [];
  }

  addProduct(item: DeliveryItem): void {
    this.items.push(item);
  }

  getPrice(): number {
    return this.items.reduce(
      (acc: number, item: DeliveryItem) => acc + item.getPrice(),
      0
    );
  }

  getItems() {
    return this.items;
  }
}
