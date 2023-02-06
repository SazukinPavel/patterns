import INode from "../interfaces/INode";
import IStack from "../interfaces/IStack";

export default class Stack<T> implements IStack<T> {
  private root: INode<T> = null;
  private last: INode<T> = null;
  private capacity: number;
  private length: number = 0;

  constructor(capacity: number = Infinity) {
    this.capacity = capacity;
  }

  push(item: T): void {
    if (this.capacity <= this.length) {
      throw new TypeError("Stack capacity limit!");
    }

    const newNode: INode<T> = { data: item, next: null };

    if (this.root === null) {
      this.root = newNode;
      this.last = this.root;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
  }
  pop(): T {
    if (this.last) {
      const { data } = this.last;

      if (this.root.next === null) {
        this.root = null;
        this.last = null;
      } else {
        let current: INode<T> = this.root;
        while (current.next.next !== null) {
          current = current.next;
        }
        current.next = null;
        this.last = current;
      }

      this.length--;
      return data;
    }
  }
  peek(): T {
    return this.last.data;
  }
  size(): number {
    return this.length;
  }
}
