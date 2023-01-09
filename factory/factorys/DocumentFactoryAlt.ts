import { DocxDocument } from "../documents/DocxDocument";
import IDocument from "../documents/IDocument";
import { PdfDocument } from "../documents/PdfDocument";

const DOC_TYPE = {
  docx: DocxDocument,
  pdf: PdfDocument,
};

type DT = typeof DOC_TYPE;

export default class DocumentFactoryAlt {
  createDocument<T extends keyof DT>(type: T, name?: string): IDocument {
    return new DOC_TYPE[type](name);
  }

  async read(doc: IDocument) {
    console.log(await doc.read());
  }
}
