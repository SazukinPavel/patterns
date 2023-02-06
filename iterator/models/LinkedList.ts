import IAgregator from "../interfaces/IAggregator";
import ILinkedList from "../interfaces/ILinkedList";
import IListIterator from "../interfaces/IListIterator";
import LinkedListIterator from "./LinkedListIterator";
import LinkedListReverseIterator from "./LinkedListReverseIterator";
import Node from "./Node";

export default class LinkedList<T> implements ILinkedList<T>, IAgregator<T> {
  private head: Node<T> | null = null;
  private tail: Node<T> | null = null;
  private length: number = 0;

  peek() {
    return this.tail?.data;
  }

  pop() {
    if (this.tail !== null) {
      const { data } = this.tail;

      this.tail = this.tail.prev;
      this.tail.next = null;

      this.length--;

      return data;
    }
  }

  push(data: T): void {
    const newNode = new Node(data);
    if (this.head === null && this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
  }

  size(): number {
    return this.length;
  }

  getIterator(reverse: boolean = false) {
    return reverse
      ? new LinkedListReverseIterator(this.tail)
      : new LinkedListIterator(this.head);
  }
}
