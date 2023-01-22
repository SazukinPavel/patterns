import BMVFactory from "./factorys/BMVFactory";
import CarFactory from "./factorys/CarFactory";
import MersedesFactory from "./factorys/MersedesFactory";

function client(carFactory: CarFactory) {
  const wheel = carFactory.makeWheel();

  console.log(wheel);

  const car = carFactory.makeCar();

  console.log(car);
}

client(new BMVFactory());
client(new MersedesFactory());
