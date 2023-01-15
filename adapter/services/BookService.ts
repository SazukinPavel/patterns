import MapStorage from "../models/MapStorage";

export default class BookService {
  constructor(private storage: MapStorage) {}

  saveBook(id: string, name: string) {
    this.storage.save(id, name);
  }

  getBook(id: string) {
    return this.storage.get(id);
  }

  getAllBooks() {
    return this.storage.getAll();
  }
}
