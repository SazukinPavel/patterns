import BookMap from "../models/BookMap";

export default class ReadBookService {
  read(number: number) {
    return BookMap.getInstance().get(number);
  }

  readAllBooks() {
    return BookMap.getInstance().entries();
  }
}
