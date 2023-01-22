import Mersedes from "../models/Mersedes";
import MersedesBody from "../models/MersedesBody";
import MersedesEngine from "../models/MersedesEngine";
import MersedesWheels from "../models/MersedesWheels";
import CarFactory from "./CarFactory";

export default class MersedesFactory extends CarFactory {
  makeWheel() {
    return new MersedesWheels();
  }
  makeBody() {
    return new MersedesBody();
  }
  makeEngine() {
    return new MersedesEngine();
  }
  makeCar() {
    const engine = this.makeEngine();
    const wheel = this.makeWheel();
    const body = this.makeBody();

    return new Mersedes(body, wheel, engine);
  }
}
