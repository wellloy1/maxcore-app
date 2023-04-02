export default class Service {
  #di = {};
  constructor(di) {
    this.#di;
  }

  async _onStart() {
    return await this.#di.knexPgClient.ping();
  }
}
