import Color from "../enums/Color";
import IBody from "../interfaces/IBody";

export default class BMVBody implements IBody {
  color: Color;
  capability: string;
  width: number;
  height: number;
  weight: number;

  constructor() {
    this.capability = "100";
    this.weight = 1000;
    this.color = Color.GRAY;
    this.width = 250;
    this.height = 100;
  }
}
