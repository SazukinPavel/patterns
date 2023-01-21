export default interface IEmployee {
  fio: string;
  salary: number;
  skills: string[];
  toString(): string;
  work(): void | Promise<void>;
}
