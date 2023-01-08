import DocxFactory from "./factorys/DocxFactory";
import PdfFactory from './factorys/PdfFactory';

const docxFactory=new DocxFactory()

const docxDocument=docxFactory.createDocument('docx 1')

docxFactory.read(docxDocument)

const pdfFactory=new PdfFactory()

const pdfDocument=pdfFactory.createDocument('pdf 1')

pdfFactory.read(pdfDocument)