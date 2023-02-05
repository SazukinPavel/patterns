export default interface ICommand {
  execute(): boolean;
  saveBackup(): void;
  undo(): void;
}
