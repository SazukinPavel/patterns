export default abstract class Device {
  public isEnabled?: boolean;
  protected name: string;
  protected volume?: number;
  protected channel?: number;

  constructor(name: string, volume: number, channel: number, isEnable = false) {
    this.name = name;
    this.isEnabled = isEnable;
    this.volume = volume;
    this.channel = channel;
  }

  abstract enable(): void;
  abstract disable(): void;
  abstract setVolume(volume: number): void;
  abstract getVolume(): number;
  abstract getChannel(): any;
  abstract setChannel(channel: any): void;
}
