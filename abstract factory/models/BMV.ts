import IBody from "../interfaces/IBody";
import IEngine from "../interfaces/IEngine";
import IWheel from "../interfaces/IWheels";
import Car from "./Car";

export default class BMV extends Car {
  ride(): void {
    console.log("BMW ride");
  }

  constructor(body: IBody, wheel: IWheel, engine: IEngine) {
    super(body, engine, wheel);
  }
}
