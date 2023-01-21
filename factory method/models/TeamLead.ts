import Employee from "./Employee";

export default class TeamLead extends Employee {
  constructor(fio: string) {
    super(fio, 48443, ["Teamwork", "Communication", "Organization"]);
  }

  async work() {
    console.log("TeamLead hard working start");
    await setTimeout(() => {
      console.log("TeamLead hard working end");
    }, 500);
  }

  override toString(): string {
    return "TeamLead " + super.toString();
  }
}
