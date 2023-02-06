export default interface ILinkedList<T> {
  peek(): T | undefined;
  pop(): T | undefined;
  push(data: T): void;
  size(): number;
}
