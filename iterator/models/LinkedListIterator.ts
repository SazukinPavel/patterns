import IListIterator from "../interfaces/IListIterator";
import INode from "../interfaces/INode";

export default class LinkedListIterator<T> implements IListIterator<T> {
  private rootNode: INode<T>;
  private currentNode: INode<T>;

  constructor(root: INode<T>) {
    this.rootNode = root;
    this.currentNode = root;
  }
  hasMore(): boolean {
    return this.currentNode.next !== null;
  }

  current(): T {
    return this.currentNode.data;
  }
  next(): T {
    if (this.hasMore()) {
      this.currentNode = this.currentNode.next;
    }
    return this.currentNode.data;
  }
  rewind(): void {
    this.currentNode = this.rootNode;
  }
}
