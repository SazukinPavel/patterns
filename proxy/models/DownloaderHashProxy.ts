import NodeCache from "node-cache";
import IVideoDownloader from "../interfaces/IVideoDownloader";

export default class DownloaderHashProxy implements IVideoDownloader {
  private cashed: NodeCache;
  private service: IVideoDownloader;

  constructor(service: IVideoDownloader) {
    this.service = service;
    this.cashed = new NodeCache();
  }

  downloadB64(url: string): string {
    if (this.cashed.get(`download:${url}`) !== undefined) {
      console.log("get from cash");
      return this.cashed.get(`download:${url}`);
    } else {
      console.log("set new in cash");
      const video = this.service.downloadB64(url);
      this.cashed.set(`download:${url}`, video, 5000);
      return video;
    }
  }

  listVideos(): string[] {
    if (this.cashed.get("list") !== undefined) {
      console.log("get from cash");
      return this.cashed.get("list");
    } else {
      console.log("set new in cash");
      const list = this.service.listVideos();
      this.cashed.set("list", list, 5000);
      return list;
    }
  }

  getVideoInfo(url: string): string {
    if (this.cashed.get(`info:${url}`) !== undefined) {
      console.log("get from cash");
      return this.cashed.get(`info:${url}`);
    } else {
      console.log("set new in cash");
      const video = this.service.getVideoInfo(url);
      this.cashed.set(`info:${url}`, video, 5000);
      return video;
    }
  }
}
