import ICommand from "../interfaces/ICommand";

export default class CommandHistory {
  private commands: ICommand[] = [];

  push(command: ICommand) {
    this.commands.push(command);
  }

  pop(): ICommand | undefined {
    return this.commands.pop();
  }
}
