import ICommand from "../interfaces/ICommand";
import Stack from "./Stack";

export default class CommandHistory {
  private commands: Stack<ICommand> = new Stack(25);

  push(command: ICommand) {
    this.commands.push(command);
  }

  pop(): ICommand | undefined {
    return this.commands.pop();
  }
}
