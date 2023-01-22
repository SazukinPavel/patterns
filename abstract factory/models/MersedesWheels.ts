import IWheel from "../interfaces/IWheels";

export default class MersedesWheels implements IWheel {
  count: number;
  diametr: number;

  constructor() {
    this.count = 4;
    this.diametr = 14;
  }
}
