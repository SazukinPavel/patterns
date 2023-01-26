import IDataServiceOptions from "../interfaces/IDataServiceOptions.js";
import IDataSource from "../interfaces/IDataSource.js";
import DataSourceDecorator from "../models/DataSourceDecorator.js";
import EncryptionDataSourceDecorator from "../models/EncryptionDataSourceDecorator.js";

export default class DataService {
  private dataSource: DataSourceDecorator;

  constructor(options: IDataServiceOptions, dataSource: IDataSource) {
    if (options.useEnctrypt && options.key) {
      this.dataSource = new EncryptionDataSourceDecorator(
        dataSource,
        options.key
      );
    } else {
      this.dataSource = new DataSourceDecorator(dataSource);
    }
  }

  load() {
    return this.dataSource.read();
  }

  save(data: string) {
    return this.dataSource.write(data);
  }
}
