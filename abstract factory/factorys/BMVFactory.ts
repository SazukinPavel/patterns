import BMV from "../models/BMV";
import BMVBody from "../models/BMVBody";
import BMVEngine from "../models/BMVEngine";
import BMVWheel from "../models/BMVWheels";
import CarFactory from "./CarFactory";

export default class BMVFactoy extends CarFactory {
  makeWheel() {
    return new BMVWheel();
  }
  makeBody() {
    return new BMVBody();
  }
  makeEngine() {
    return new BMVEngine();
  }
  makeCar() {
    const engine = this.makeEngine();
    const wheel = this.makeWheel();
    const body = this.makeBody();

    return new BMV(body, wheel, engine);
  }
}
