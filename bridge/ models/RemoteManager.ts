import Device from "./Device";

export default class RemoteManager {
  protected device: Device;

  constructor(device: Device) {
    this.device = device;
  }

  nextChannel() {
    this.device.setChannel(this.device.getChannel() + 1);
  }

  previousChannel() {
    this.device.setChannel(this.device.getChannel() - 1);
  }

  volumeUp(){
    this.device.setVolume(this.device.getVolume()+1)
  }

  volumeDown(){
    this.device.setVolume(this.device.getVolume()-1)
  }

  togglePower() {
    if (this.device.isEnabled) {
      this.device.disable();
    } else {
      this.device.enable();
    }
  }

  getDevice(){
    return this.device
  }
}
