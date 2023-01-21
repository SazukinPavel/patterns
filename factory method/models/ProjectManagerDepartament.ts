import IDepartament from "../interfaces/IDepartament";
import IEmployee from "../interfaces/IEmployee";
import ProjectManager from "./ProjectManager";

export default class ProjectManagerDepartament implements IDepartament {
  createEmployee(fio: string): IEmployee {
    return new ProjectManager(fio);
  }
}
