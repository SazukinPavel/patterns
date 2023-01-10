import Format from "./models/Format";
import ImageService from "./services/ImageService";

const pictures1 = new ImageService()
  .addFormat(Format.PNG)
  .addFormat(Format.SVG)
  .addResolution(100, 50)
  .build();

const pictures2 = new ImageService().addFormat(Format.JPEG)
  .addFormat(Format.PNG)
  .addResolution(300, 300)
  .addResolution(1920, 1080)
  .build();

console.log(pictures1, pictures2);
