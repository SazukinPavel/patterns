import Format from "../models/Format";
import IResolution from "./IResolution";

export default interface IPicture extends IResolution {
  format: Format;
}
