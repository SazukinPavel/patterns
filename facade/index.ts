import { TemplatesNames } from "./models/Templates";
import NotifyService from "./services/NotifyService";

const notifyService = new NotifyService();

notifyService.connect("some");

notifyService.sendNotify(TemplatesNames.HELLO);
notifyService.sendNotify(TemplatesNames.THANKS);
notifyService.sendNotify(TemplatesNames.GOODBAY);
