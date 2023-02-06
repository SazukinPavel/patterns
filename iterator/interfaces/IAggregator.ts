import IListIterator from "./IListIterator";

export default interface IAgregator<T> {
  getIterator(): IListIterator<T>;
}
