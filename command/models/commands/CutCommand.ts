import Command from "../Command";

export default class CutCommand extends Command {
  execute(): boolean {
    this.saveBackup();
    this.app.clipboard = this.app.getText();
    this.app.deleteText();
    return true;
  }
}
