import Command from "../Command";

export default class UndoCommand extends Command {
  execute(): boolean {
    this.app.undo();
    return false;
  }
}
