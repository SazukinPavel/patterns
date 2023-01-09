import User from "./models/User";
import UserHistory from "./models/UserHistory";

const tom = new User("Tom");
const jhon = new User("Jhon");

const userHistory = new UserHistory(tom);

userHistory.addMessage("Hello friend");
userHistory.addMessage("Hey", jhon);
userHistory.addMessage("How are you?");
userHistory.addMessage("fuck of", jhon);

const newUserHistory = userHistory.clone();

console.log(userHistory);
console.log(newUserHistory);
