import knex from "knex";
import config from "./config.js";

class KnexPgClient {
  constructor() {
    this.config = config.dev;
    this.knex = knex(config.dev);
  }
  async ping() {
    try {
      await this.knex.raw("SELECT 1");
      return {
        port: config.connection.port,
        database: config.connection.database,
      };
    } catch (err) {
      throw err;
    }
  }
}

export default KnexPgClient;
