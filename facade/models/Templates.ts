import ITemplate from "../interfaces/ITemplate";

export enum TemplatesNames {
  HELLO = "hello",
  THANKS = "thanks",
  GOODBAY = "goodbay",
}

export default class Templates {
  private templates: ITemplate[] = [
    { name: TemplatesNames.HELLO, data: `<h1>Hello</h1>` },
    { name: TemplatesNames.GOODBAY, data: `<span>GoodBay</span>` },
    { name: TemplatesNames.THANKS, data: `<p>Thanks</p>` },
  ];

  getByName(name: TemplatesNames) {
    return this.templates.find((t) => t.name === name);
  }
}
