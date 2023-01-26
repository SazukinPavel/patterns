export default interface IDataSource {
  read(): Promise<string>;

  write(data: string | Buffer): Promise<void>;
}
