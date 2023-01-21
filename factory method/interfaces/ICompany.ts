import IDepartament from "./IDepartament";
import IEmployee from "./IEmployee";

export default interface ICompany {
  employeers: IEmployee[];

  work(): void | Promise<void>;
  printAll(): void;
  addEmployee(departament: IDepartament, fio: string): void;
}
