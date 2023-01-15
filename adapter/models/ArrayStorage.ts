export default class ArrayStorage {
  private storage = new Array<string>();

  push(value: string) {
    this.storage.push(value);
  }

  get(index: number) {
    return this.storage[index];
  }

  getAll() {
    return this.storage.entries();
  }
}
