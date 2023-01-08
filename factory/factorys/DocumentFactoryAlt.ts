import { DocxDocument } from "../documents/DocxDocument";
import IDocument from "../documents/IDocument";
import { PdfDocument } from "../documents/PdfDocument";

const DOC_TYPE = {
  docx: DocxDocument,
  pdf: PdfDocument,
};

type DT = typeof DOC_TYPE;

export default class DocumentFactoryAlt {
  createDocument<T extends keyof DT>(type: T): DT[T] {
    return DOC_TYPE[type];
  }

  async read(doc: IDocument) {
    console.log(await doc.read());
  }
}
