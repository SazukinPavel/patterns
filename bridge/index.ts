import AdvancedRemoteManager from "./ models/AdvancedRemoteManager";
import Radio from "./ models/Radio";
import RemoteManager from "./ models/RemoteManager";
import TV from "./ models/TV";

const radio = new Radio();
const tv = new TV();

testDevice(new RemoteManager(radio));
testDevice(new AdvancedRemoteManager(radio));
testDevice(new RemoteManager(tv));
testDevice(new AdvancedRemoteManager(tv));

function testDevice(remoteManager: RemoteManager) {
  console.log("Start state");
  console.log(remoteManager.getDevice());

  remoteManager.togglePower();

  console.log("Turn on");
  console.log(remoteManager.getDevice());

  remoteManager.nextChannel();
  remoteManager.nextChannel();
  remoteManager.previousChannel();

  console.log("Switch channels");
  console.log(remoteManager.getDevice());

  remoteManager.volumeUp();
  remoteManager.volumeDown();
  remoteManager.volumeDown();
  console.log("Switch volume");
  console.log(remoteManager.getDevice());

  if (remoteManager instanceof AdvancedRemoteManager) {
    remoteManager.mute();
    console.log("Mute volume");
    console.log(remoteManager.getDevice());
  }

  remoteManager.togglePower();
  console.log("End state");
  console.log(remoteManager.getDevice());
}
