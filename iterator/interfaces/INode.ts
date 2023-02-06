export default interface INode<T> {
  next: INode<T> | null;
  prev: INode<T> | null;
  data: T;
}
