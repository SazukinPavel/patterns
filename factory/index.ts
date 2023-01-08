import DocumentFactoryAlt from "./factorys/DocumentFactoryAlt";
import DocxFactory from "./factorys/DocxFactory";
import PdfFactory from "./factorys/PdfFactory";

//classic

const docxFactory = new DocxFactory();

const docxDocument = docxFactory.createDocument("docx 1");

docxFactory.read(docxDocument);

const pdfFactory = new PdfFactory();

const pdfDocument = pdfFactory.createDocument("pdf 1");

pdfFactory.read(pdfDocument);

//alternative

const documentFactoryAlt = new DocumentFactoryAlt();

const pdfDoc1 = new (documentFactoryAlt.createDocument("pdf"))('pdf 2');
const docxDoc1 = new (documentFactoryAlt.createDocument("docx"))('docx 2');

documentFactoryAlt.read(pdfDoc1);
documentFactoryAlt.read(docxDoc1);
