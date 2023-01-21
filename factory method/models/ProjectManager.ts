import Employee from "./Employee";

export default class ProjectManager extends Employee {
  constructor(fio: string) {
    super(fio, 80000, ["Teamwork", "Communication", "Organization"]);
  }

  async work() {
    console.log("Project manager hard working start");
    await setTimeout(() => {
      console.log("Project manager hard working end");
    }, 500);
  }
  override toString(): string {
    return "Project manager " + super.toString();
  }
}
