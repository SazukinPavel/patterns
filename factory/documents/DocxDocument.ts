import IDocument from "./IDocument";

export class DocxDocument implements IDocument {
  id: string;
  name: string;
  pageCount: number;

  constructor(name?: string) {
    this.id = Date.now().toString();
    this.name = name ?? "Docx Document " + this.id;
    this.pageCount = 1;
  }

  read(): Promise<string> {
    return Promise.resolve(
      `Docx Document ${this.id} with name ${this.name} was read. Page count:${this.pageCount}`
    );
  }

  send(): Promise<boolean> {
    return Promise.resolve(false);
  }
}
