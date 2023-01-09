export default interface IClonable {
  clone(): ThisType<this>;
}
