import IDepartament from "../interfaces/IDepartament";
import IEmployee from "../interfaces/IEmployee";
import TeamLead from "./TeamLead";

export default class TeamLeadDepartament implements IDepartament {
  createEmployee(fio: string): IEmployee {
    return new TeamLead(fio);
  }
}
