import IDepartament from "../interfaces/IDepartament";
import IEmployee from "../interfaces/IEmployee";
import Programmer from "./Programmer";

export default class ProgrammerDepartament implements IDepartament {
  createEmployee(fio: string): IEmployee {
    return new Programmer(fio);
  }
}
