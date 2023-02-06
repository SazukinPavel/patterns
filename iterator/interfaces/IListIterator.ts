export default interface IListIterator<T> {
  current(): T;
  next(): T;
  rewind(): void;
  hasMore(): boolean;
}
