import ICompany from "../interfaces/ICompany";
import IDepartament from "../interfaces/IDepartament";
import IEmployee from "../interfaces/IEmployee";

export default class Company implements ICompany {
  employeers: IEmployee[];

  constructor() {
    this.employeers = [];
  }

  async work() {
    for (const employee of this.employeers) {
      await employee.work();
    }
  }

  printAll(): void {
    const result = this.employeers.map((e) => e.toString());
    console.log(result);
  }

  addEmployee(departament: IDepartament, fio: string): void {
    this.employeers.push(departament.createEmployee(fio));
  }
}
