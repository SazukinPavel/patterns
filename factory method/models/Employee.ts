import IEmployee from "../interfaces/IEmployee";

export default abstract class Employee implements IEmployee {
  fio: string;
  salary: number;
  skills: string[];

  constructor(fio: string, salary: number, skills: string[]) {
    this.fio = fio;
    this.salary = salary;
    this.skills = skills;
  }

  abstract work(): void | Promise<void>;

  toString(): string {
    return `${this.fio} Salary:${this.salary} Skills:${this.skills.join(" ")}`;
  }
}
