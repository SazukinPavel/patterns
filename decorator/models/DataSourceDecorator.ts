import IDataSource from "../interfaces/IDataSource.js";

export default class DataSourceDecorator implements IDataSource {
  dataSource: IDataSource;

  constructor(dataSource: IDataSource) {
    this.dataSource = dataSource;
  }

  read(): Promise<string> {
    return this.dataSource.read();
  }
  write(data: string | Buffer): Promise<void> {
    return this.dataSource.write(data);
  }
}
