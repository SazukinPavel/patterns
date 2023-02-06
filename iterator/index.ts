import IListIterator from "./interfaces/IListIterator";
import LinkedList from "./models/LinkedList";

const linkedList = new LinkedList<number>();
linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);
linkedList.push(5);
linkedList.push(6);
linkedList.push(7);

console.log("iterate list");
iterateList(linkedList.getIterator());

console.log("reverse iterate list");
iterateList(linkedList.getIterator(true));

function iterateList<T>(iterator: IListIterator<T>) {
  console.log(iterator.current());
  while (iterator.hasMore()) {
    iterator.next();
    console.log(iterator.current());
  }
}
