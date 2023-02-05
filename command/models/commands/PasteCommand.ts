import Command from "../Command";

export default class PasteCommand extends Command {
  execute(): boolean {
    this.saveBackup();
    this.app.setText(this.app.clipboard);
    return true;
  }
}
