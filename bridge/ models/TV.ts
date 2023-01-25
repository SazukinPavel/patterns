import Device from "./Device";

export default class TV extends Device {
  constructor() {
    super("TV", 50, 1);
  }

  override enable(): void {
    this.isEnabled = true;
  }
  override disable(): void {
    this.isEnabled = false;
  }
  override setVolume(volume: number): void {
    if (volume >100 || volume < 0) {
      return;
    }

    this.volume = volume;
  }

  override getVolume(): number {
    return this.volume || 0;
  }

  override getChannel(): number {
    return this.channel || 0;
  }

  override setChannel(channel: number): void {
    this.channel = channel;
  }
}
