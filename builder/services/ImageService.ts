import Format from "../models/Format";
import IPicture from "../models/IPicture";
import IResolution from "../models/IResolution";

export default class ImageService {
  private formats: Format[] = [];
  private resolutions: IResolution[] = [];

  addFormat(format: Format) {
    if (!this.formats.includes(format)) {
      this.formats.push(format);
    }

    return this;
  }

  addResolution(width: number, height: number) {
    if (
      this.resolutions.findIndex(
        (r) => r.width === width && r.height === height
      ) === -1
    ) {
      this.resolutions.push({ width, height });
    }

    return this;
  }

  build(): IPicture[] {
    const pictures: IPicture[] = [];

    for (const r of this.resolutions) {
      for (const f of this.formats) {
        pictures.push({ format: f, width: r.width, height: r.height });
      }
    }

    return pictures;
  }
}
