import NotificationSender from "./models/NotificationSender";
import TelegramProvider from "./models/TelegramProvider";
import WhatsUpProvider from "./models/WhatsUpProvider";

const notificationSenderTelegram = new NotificationSender(
  new TelegramProvider(),
  "https://web.telegram.org/"
);

notificationSenderTelegram.sendMessage({
  text: "Hello, bew user",
  dateOfCreate: new Date(Date.now()),
});
notificationSenderTelegram.sendMessage({
  text: "How are you?",
  dateOfCreate: new Date(Date.now()),
});

notificationSenderTelegram.disconect();

const notificationSenderWhatsUp = new NotificationSender(
  new WhatsUpProvider(),
  "https://whatsup.com/"
);

notificationSenderWhatsUp.sendMessage({
  text: "Hello, bew user",
  dateOfCreate: new Date(Date.now()),
});
notificationSenderWhatsUp.sendMessage({
  text: "How are you?",
  dateOfCreate: new Date(Date.now()),
});

notificationSenderWhatsUp.disconect();
