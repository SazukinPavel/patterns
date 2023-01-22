import IWheel from "../interfaces/IWheels";

export default class BMVWheel implements IWheel {
  count: number;
  diametr: number;

  constructor() {
    this.count = 4;
    this.diametr = 18;
  }
}
