import Color from "../enums/Color";
import IBody from "../interfaces/IBody";

export default class MersedesBody implements IBody {
  color: Color;
  capability: string;
  width: number;
  height: number;
  weight: number;

  constructor() {
    this.capability = "100";
    this.weight = 800;
    this.color = Color.BLACK;
    this.width = 200;
    this.height = 90;
  }
}
