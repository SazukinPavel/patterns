import Format from "./Format";
import IResolution from "./IResolution";

export default interface IPicture extends IResolution {
  format: Format;
}
