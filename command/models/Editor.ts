import IEditor from "../interfaces/IEditor";

export default class Editor implements IEditor {
  text: string = "";

  get(): string {
    return this.text;
  }

  deleteAll(): void {
    this.text = "";
  }

  replace(text: string): void {
    this.text = text;
  }
}
