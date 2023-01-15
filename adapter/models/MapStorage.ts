export default class MapStorage {
  private storage = new Map<string, string>();

  save(key: string, value: string) {
    this.storage.set(key, value);
  }

  get(key: string): string | undefined | TypeError {
    return this.storage.get(key);
  }

  getAll() {
    return this.storage.entries();
  }
}
