import IEditor from "../interfaces/IEditor";
import Command from "./Command";
import CommandHistory from "./CommandHistory";
import CopyCommand from "./commands/CopyCommand";
import CutCommand from "./commands/CutCommand";
import PasteCommand from "./commands/PasteCommand";
import UndoCommand from "./commands/UndoCommand";

type CommandType = "copy" | "cut" | "paste" | "undo";

export default class Application {
  history: CommandHistory;
  clipboard = "";
  private editor: IEditor;
  private commands: Map<CommandType, Command> = new Map();

  constructor(editor: IEditor) {
    this.editor = editor;
    this.history = new CommandHistory();
    this.inithializeCommands();
  }

  private inithializeCommands() {
    this.commands.set("copy", new CopyCommand(this));
    this.commands.set("paste", new PasteCommand(this));
    this.commands.set("cut", new CutCommand(this));
    this.commands.set("undo", new UndoCommand(this));
  }

  executeCommand(command: CommandType) {
    if (this.commands.get(command) === undefined) {
      return;
    } else if (this.commands.get(command)?.execute()) {
      this.history.push(this.commands.get(command));
    }
  }

  undo() {
    this.history.pop()?.undo();
  }

  getText() {
    return this.editor.get();
  }

  setText(text: string) {
    this.editor.replace(text);
  }

  deleteText() {
    this.editor.deleteAll();
  }
}
