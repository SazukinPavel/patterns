import IPhone from "./models/IPhone";
import Package from "./models/Package";
import SataAdapter from "./models/SataAdapter";
import Shop from "./models/Shop";

const iPhone = new IPhone();
const sataAdapter = new SataAdapter();
const package1 = new Package(20);

package1.addProduct(sataAdapter);
package1.addProduct(iPhone);

const shop1 = new Shop(100);

shop1.addProduct(iPhone);
shop1.addProduct(sataAdapter);

console.log(shop1.getItems());
console.log("Price: ", shop1.getPrice());

const shop2 = new Shop(100);

shop2.addProduct(package1);

console.log(shop2.getItems());
console.log("Price: ", shop2.getPrice());

const shop3 = new Shop(100);

shop3.addProduct(package1);
shop3.addProduct(sataAdapter);

console.log(shop3.getItems());
console.log("Price: ", shop3.getPrice());
