import IDocument from "../documents/IDocument";

export default abstract class DocumentFactory {
  abstract createDocument(name:string): IDocument;

  async read(doc: IDocument) {
    console.log(await doc.read());
  }
}
