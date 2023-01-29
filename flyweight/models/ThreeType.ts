export type ThreeBornType = "Oak" | "Pine" | "Birch";

export default class ThreeType {
  constructor(public color: string, public type: ThreeBornType) {}

  toString(){
    return `${this.color} ${this.type}`
  }
}
