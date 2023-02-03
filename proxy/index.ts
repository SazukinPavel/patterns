import DownloaderHashProxy from "./models/DownloaderHashProxy";
import DownloaderService from "./models/DownloaderService";
import YouTubeDownloaderService from "./models/YouTubeDownloaderService";

const downloaderService = new DownloaderService(new YouTubeDownloaderService());
const downloaderServiceWithHashing = new DownloaderService(
  new DownloaderHashProxy(new YouTubeDownloaderService())
);

console.log("Base service");
test(downloaderService);
console.log("Hashing service");
test(downloaderServiceWithHashing);
setTimeout(() => {
  console.log("Hashing service after 10 sec");
  test(downloaderServiceWithHashing);
}, 10000);

function test(downloaderService: DownloaderService) {
  const videoUrl1 = "https://refactoring.guru/ru/design-patterns/proxy1";
  const videoUrl2 = "https://refactoring.guru/ru/design-patterns/proxy2";
  const videoUrl3 = "https://refactoring.guru/ru/design-patterns/proxy3";
  const videoUrl4 = "https://refactoring.guru/ru/design-patterns/proxy4";

  console.log("video1", downloaderService.getInfoAboutVideo(videoUrl1));
  console.log("video2", downloaderService.getInfoAboutVideo(videoUrl2));
  console.log("video1", downloaderService.getInfoAboutVideo(videoUrl1));

  console.log("list", downloaderService.showAllVideos());
  console.log("list", downloaderService.showAllVideos());

  console.log("video3", downloaderService.downloadVideo(videoUrl3));
  console.log("video4", downloaderService.downloadVideo(videoUrl4));
  console.log("video3", downloaderService.downloadVideo(videoUrl3));

  console.log(
    "dwonloadAll",
    downloaderService.downloadVideos([
      videoUrl1,
      videoUrl2,
      videoUrl3,
      videoUrl4,
    ])
  );
}
