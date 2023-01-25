import Device from "./Device";

export default class Radio extends Device {
  constructor() {
    super("Radio", 25, 66);
  }

  override enable(): void {
    this.isEnabled = true;
  }
  override disable(): void {
    (this.channel = undefined), (this.volume = undefined);
    this.isEnabled = false;
  }
  override setVolume(volume: number): void {
    if (volume > 50 || volume < 0) {
      return;
    }

    this.volume = volume;
  }

  override getVolume(): number {
    return this.volume || 0;
  }
  override getChannel(): any {
    return this.channel;
  }

  override setChannel(channel: number): void {
    this.channel = channel;
  }
}
