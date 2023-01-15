import ArrayStorage from "./ArrayStorage";
import MapStorage from "./MapStorage";

export default class ArrayStorageAdapterToMap extends MapStorage {
  arrayStrage: ArrayStorage;

  constructor() {
    super();

    this.arrayStrage = new ArrayStorage();
  }

  override get(key: string) {
    const numberKey = +key;

    if (Number.isNaN(numberKey)) {
      throw new TypeError("Key must be number");
    }

    return this.arrayStrage.get(numberKey);
  }

  override save(_: string, value: string): void {
    return this.arrayStrage.push(value);
  }

  override getAll(): IterableIterator<[string, string]> {
    const map = new Map<string, string>();

    for (const [key, val] of this.arrayStrage.getAll()) {
      map.set(key.toString(), val);
    }

    return map.entries();
  }
}
