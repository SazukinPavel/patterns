import IDataSource from "../interfaces/IDataSource.js";
import DataSourceDecorator from "./DataSourceDecorator.js";
import CryptoJS from "crypto-js";

export default class EncryptionDataSourceDecorator extends DataSourceDecorator {
  private key: string;

  constructor(dataSource: IDataSource, key: string) {
    super(dataSource);
    this.key = key;
  }

  override write(data: string | Buffer): Promise<void> {
    if (Buffer.isBuffer(data)) {
      data = data.toString();
    }
    const encryptData = CryptoJS.AES.encrypt(data, this.key).toString();
    return super.write(encryptData);
  }

  override async read(): Promise<string> {
    const data = await super.read();

    const bytes = CryptoJS.AES.decrypt(data, this.key);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
}
