import IBody from "../interfaces/IBody";
import IEngine from "../interfaces/IEngine";
import IWheel from "../interfaces/IWheels";

export default abstract class Car {
  protected body: IBody;
  protected engine: IEngine;
  protected wheel: IWheel;

  constructor(body: IBody, engine: IEngine, wheel: IWheel) {
    this.body = body;
    this.engine = engine;
    this.wheel = wheel;
  }

  abstract ride(): void;
}
