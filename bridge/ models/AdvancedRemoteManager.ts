import RemoteManager from "./RemoteManager";

export default class AdvancedRemoteManager extends RemoteManager {
  mute() {
    this.device.setVolume(0);
  }

  override togglePower(): void {
    console.log("Bip, toggle power");
    super.togglePower();
  }
}
