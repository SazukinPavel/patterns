import ITemplate from "../interfaces/ITemplate";
import Logger from "../models/Logger";
import Notify from "../models/Notify";
import Templates, { TemplatesNames } from "../models/Templates";

export default class NotifyService {
  protected notify: Notify;
  protected logger: Logger;
  protected templates: Templates;

  constructor() {
    this.notify = new Notify();
    this.logger = new Logger();
    this.templates = new Templates();
  }

  connect(connection: string) {
    this.notify.connect(connection);
  }

  sendNotify(templateName: TemplatesNames) {
    const template = this.templates.getByName(templateName);

    if (template === undefined) {
      throw new Error("template undefinded");
    }

    this.logger.success(`sendNotify with ${template} template`);

    this.notify.send(template);
  }
}
