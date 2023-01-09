import ReadBookService from "./services/ReadBookService";
import WriteBookService from "./services/WriteBookService";

const readBookService = new ReadBookService();
const writeBookService = new WriteBookService();

writeBookService.write("Piter pen", 1);
writeBookService.write("MainKampf", 2);
writeBookService.write("Koran");

console.log(readBookService.read(1));
console.log(readBookService.read(2));

console.log(readBookService.readAllBooks());
