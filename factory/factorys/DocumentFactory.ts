import IDocument from "../interfaces/IDocument";

export default abstract class DocumentFactory {
  abstract createDocument(name:string): IDocument;

  async read(doc: IDocument) {
    console.log(await doc.read());
  }
}
