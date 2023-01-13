export default interface IDocument {
  name: string;
  id: string;
  pageCount: number;
  send: () => Promise<boolean>;
  read: () => Promise<string>;
}
