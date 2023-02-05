import Command from "../Command";

export default class CopyCommand extends Command {
  execute(): boolean {
    this.app.clipboard = this.app.getText();
    return false;
  }
}
