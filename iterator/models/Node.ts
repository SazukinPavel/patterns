import INode from "../interfaces/INode";

export default class Node<T> implements INode<T> {
  data: T;
  next: INode<T> | null = null;
  prev: INode<T> | null = null;

  constructor(data: T) {
    this.data = data;
  }
}
