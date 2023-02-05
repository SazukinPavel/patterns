export default interface IEditor {
  text: string;

  get(): string;
  deleteAll(): void;
  replace(text: string): void;
}
