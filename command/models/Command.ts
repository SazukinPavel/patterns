import ICommand from "../interfaces/ICommand";
import Application from "./Application";

export default abstract class Command implements ICommand {
  protected app: Application;
  protected backup: string = "";

  constructor(app: Application) {
    this.app = app;
  }

  abstract execute(): boolean;

  saveBackup(): void {
    this.backup = this.app.getText();
  }

  undo(): void {
    this.app.setText(this.backup);
  }
}
