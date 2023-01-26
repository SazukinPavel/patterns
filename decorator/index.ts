import path from "path";
import IDataServiceOptions from "./interfaces/IDataServiceOptions.js";
import FileDataSource from "./models/FileDataSource.js";
import DataService from "./services/DataService.js";

const options1: IDataServiceOptions = { useEnctrypt: false, key: "" };
console.log("Options1");
console.log(options1);
await testDataService(options1);

const options2: IDataServiceOptions = { useEnctrypt: true, key: "some key" };
console.log("Options2");
console.log(options2);
await testDataService(options2);

async function testDataService(options: IDataServiceOptions) {
  const testPath = path.join("dist", "test.txt");
  const dataService = new DataService(options, new FileDataSource(testPath));

  const testData = "Some text 123434imd";
  console.log(`Test data: ${testData}`);

  console.log("Save test data");
  await dataService.save(testData);

  console.log(`Load test data:${await dataService.load()}`);

  console.log(`Real data in file:${await (new FileDataSource(testPath).read())}`);
}
