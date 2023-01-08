import { DocxDocument } from '../documents/DocxDocument';
import IDocument from "../documents/IDocument";
import DocumentFactory from "./DocumentFactory";

export default class DocxFactory extends DocumentFactory{
    createDocument(name:string): IDocument {
        return new DocxDocument(name)
    }
}