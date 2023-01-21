import Employee from "./Employee";

export default class Programmer extends Employee {
  constructor(fio: string) {
    super(fio, 93000, [
      "Object-oriented programming (OOP) languages",
      "Web development",
      "Database and SQL",
    ]);
  }

  async work() {
    console.log("Programmer hard working start");
    await setTimeout(() => {
      console.log("Programmer hard working end");
    }, 500);
  }

  override toString(): string {
    return "Programmer " + super.toString();
  }
}
