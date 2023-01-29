import Point from "./Point";
import ThreeType from "./ThreeType";

export default class Three {
  coordinate: Point;
  height: number;
  weight: number;
  threeType: ThreeType;

  constructor(
    x: number,
    y: number,
    threeType: ThreeType,
    height: number,
    weight: number
  ) {
    this.coordinate = new Point(x, y);
    this.height = height;
    this.weight = weight;
    this.threeType = threeType;
  }


  toString(){
    return `X:${this.coordinate.x} Y:${this.coordinate.y} Height:${this.height} Weight:${this.weight} Type:${this.threeType.toString()}`
  }
}
