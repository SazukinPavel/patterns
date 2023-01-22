import IBody from "../interfaces/IBody";
import IEngine from "../interfaces/IEngine";
import IWheels from "../interfaces/IWheels";
import Car from "../models/Car";

export default abstract class CarFactory {
  abstract makeWheel(): IWheels;
  abstract makeBody(): IBody;
  abstract makeEngine(): IEngine;
  abstract makeCar(): Car;
}
