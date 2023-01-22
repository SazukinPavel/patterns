import IEngine from "../interfaces/IEngine";

export default class MersedesEngine implements IEngine {
  power: string;
  consumption: number;

  constructor() {
    this.power = "400 horsepower";
    this.consumption = 1 / 1250;
  }
}
