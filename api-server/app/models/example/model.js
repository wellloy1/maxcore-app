export default class Example {
  constructor(services) {
    this.services = services;
  }

  async hello() {
    console.log(this.services);
  }
}
