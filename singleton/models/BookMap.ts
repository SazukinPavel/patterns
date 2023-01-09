export default class BookMap {
  private static map: Map<number, string>;

  private constructor() {}

  get(key: number) {
    return BookMap.map.get(key);
  }

  set(key: number, value: string) {
    return BookMap.map.set(key, value);
  }

  entries() {
    return BookMap.map.entries();
  }

  static getInstance() {
    if (!this.map) {
      this.map = new Map();
    }

    return this.map;
  }
}
