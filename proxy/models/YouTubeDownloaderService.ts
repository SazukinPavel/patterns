import IVideoDownloader from "../interfaces/IVideoDownloader";

export default class YouTubeDownloaderService implements IVideoDownloader {
  listVideos(): string[] {
    return ["video1", "video2", "video3", "video4"];
  }
  getVideoInfo(url: string): string {
    return `Some information about video at ${url}`;
  }
  downloadB64(url: string): string {
    return `${url} from youtube`;
  }
}
