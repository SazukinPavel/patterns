import Three from "./Three";
import ThreeType from "./ThreeType";

export default class ThreeFactory {
  threeTypes: Map<string, ThreeType>;

  constructor(threeTypes: ThreeType[] = []) {
    this.threeTypes = new Map();

    for (const threeType of threeTypes) {
      this.threeTypes.set(this.getKey(threeType), threeType);
    }
  }

  getThree(
    x: number,
    y: number,
    weight: number,
    height: number,
    threeType: ThreeType
  ): Three {
    const key = this.getKey(threeType);

    if (!this.threeTypes.get(key)) {
      console.log("Create new three type");
      const newThreeType = new ThreeType(threeType.color, threeType.type);
      this.threeTypes.set(key, newThreeType);
    } else {
      console.log("Get three type from hash");
    }

    return new Three(
      x,
      y,
      this.threeTypes.get(key) ||
        new ThreeType(threeType.color, threeType.type),
      height,
      weight
    );
  }

  getKey(threeType: ThreeType) {
    return Object.values(threeType).join("_");
  }
}
