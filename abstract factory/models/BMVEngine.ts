import IEngine from "../interfaces/IEngine";

export default class BMVEngine implements IEngine {
  power: string;
  consumption: number;

  constructor() {
    this.power = "627 horsepower";
    this.consumption = 1 / 750;
  }
}
