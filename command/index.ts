import Application from "./models/Application";
import Editor from "./models/Editor";

const app = new Application(new Editor());

app.setText("some text");
console.log("Text " + app.getText());

app.executeCommand("copy");
console.log("Copy command, clipboard:", app.clipboard);
console.log("Text " + app.getText());

console.log("Paste command, clipboard:", app.clipboard);
app.clipboard = "12343434";
app.executeCommand("paste");
console.log("Text " + app.getText());

app.executeCommand("cut");
console.log("Cut command, clipboard:", app.clipboard);
console.log("Text " + app.getText());

app.executeCommand("undo");
console.log("Undo command, clipboard:", app.clipboard);
console.log("Text " + app.getText());

app.executeCommand("undo");
console.log("Undo command, clipboard:", app.clipboard);
console.log("Text " + app.getText());
