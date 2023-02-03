import IVideoDownloader from "../interfaces/IVideoDownloader";

export default class DownloaderService {
  private videoDownloader: IVideoDownloader;

  constructor(videoDownloader: IVideoDownloader) {
    this.videoDownloader = videoDownloader;
  }

  downloadVideo(url: string) {
    return this.videoDownloader.downloadB64(url);
  }

  downloadVideos(urls: string[]) {
    return urls.map((url) => this.videoDownloader.downloadB64(url));
  }

  getInfoAboutVideo(url: string) {
    return this.videoDownloader.getVideoInfo(url);
  }

  showAllVideos() {
    return this.videoDownloader.listVideos();
  }
}
