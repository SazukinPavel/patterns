import ArrayStorageAdapterToMap from "./models/ArrayStorageAdapterToMap";
import MapStorage from "./models/MapStorage";
import BookService from "./services/BookService";

console.log("Map storage");

const bookServiceMap = new BookService(new MapStorage());

bookServiceMap.saveBook("1", "Good book");
bookServiceMap.saveBook("2", "Bad book");

console.log(bookServiceMap.getBook("1"));
console.log(bookServiceMap.getAllBooks());

console.log("Array storage");

const bookServiceArray = new BookService(new ArrayStorageAdapterToMap());

bookServiceArray.saveBook("1", "Good book");
bookServiceArray.saveBook("2", "Bad book");

console.log(bookServiceArray.getBook("1"));
console.log(bookServiceArray.getAllBooks());
