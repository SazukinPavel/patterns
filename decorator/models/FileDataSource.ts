import * as fs from "node:fs/promises";
import IDataSource from "../interfaces/IDataSource.js";

export default class FileDataSource implements IDataSource{
  protected path: string;

  constructor(path: string) {
    this.path = path;
  }

  async read() {
    const buffer = await fs.readFile(this.path);
    return buffer.toString();
  }

  write(data: string | Buffer) {
    if (typeof data === "string") {
      data = Buffer.from(data, "utf-8");
    }

    return fs.writeFile(this.path, data);
  }
}
