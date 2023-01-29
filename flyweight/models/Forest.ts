import { Random } from "random-js";
import Three from "./Three";
import ThreeFactory from "./ThreeFactory";
import { ThreeBornType } from "./ThreeType";

export default class Forest {
  private threes: Three[];

  constructor(threes: Three[]) {
    this.threes = threes;
  }

  printForest() {
    for (const three of this.threes) {
      console.log(`Print three ${three}`);
    }
  }

  randomForestGenerator(col: number) {
    const availableThreeTypes: ThreeBornType[] = ["Birch", "Oak", "Pine"];
    const availableWidths = [40, 60, 50, 80];
    const availableHeights = [40, 60, 50, 80];
    const availableColors = ["green", "red", "yellow", "black"];

    const threeFactory = new ThreeFactory();
    const random = new Random();

    for (let i = 0; i < col; i++) {
      const color = this.getRandomFromLength(availableColors, random);
      const width = this.getRandomFromLength(availableWidths, random);
      const height = this.getRandomFromLength(availableHeights, random);
      const type = this.getRandomFromLength(availableThreeTypes, random);

      this.threes.push(
        threeFactory.getThree(i, i, width, height, { color, type })
      );
    }
  }

  private getRandomFromLength<T>(variants: T[], random: Random): T {
    return variants[random.integer(0, variants.length - 1)];
  }
}
