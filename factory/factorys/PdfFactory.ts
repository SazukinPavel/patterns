import { PdfDocument } from "../documents/PdfDocument";
import IDocument from "../interfaces/IDocument";
import DocumentFactory from "./DocumentFactory";

export default class PdfFactory extends DocumentFactory {
  createDocument(name: string): IDocument {
    return new PdfDocument(name);
  }
}
