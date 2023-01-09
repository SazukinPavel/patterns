import BookMap from "../models/BookMap";

export default class WriteBookService {
  write(bookName: string, number?: number) {
    number = number ?? Date.now();

    return BookMap.getInstance().set(number, bookName);
  }
}
