import IListIterator from "../interfaces/IListIterator";
import INode from "../interfaces/INode";

export default class LinkedListReverseIterator<T>
  implements IListIterator<T>
{
  private tailNode: INode<T>;
  private currentNode: INode<T>;

  constructor(root: INode<T>) {
    this.tailNode = root;
    this.currentNode = root;
  }
  hasMore(): boolean {
    return this.currentNode.prev !== null;
  }

  current(): T {
    return this.currentNode.data;
  }
  next(): T {
    if (this.hasMore()) {
      this.currentNode = this.currentNode.prev;
    }
    return this.currentNode.data;
  }
  rewind(): void {
    this.currentNode = this.tailNode;
  }
}
