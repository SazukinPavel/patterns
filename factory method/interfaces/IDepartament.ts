import IEmployee from "./IEmployee";

export default interface IDepartament {
  createEmployee(fio: string): IEmployee;
}
