export default interface IVideoDownloader {
  downloadB64(url: string): string;
  listVideos(): string[];
  getVideoInfo(url: string): string;
}
