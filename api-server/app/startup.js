import { start } from "maxcore";
import KnexPgClient from "./agents/knexPgClient/index.js";

const knexPgClient = new KnexPgClient();

await start({
  services: [
    {
      name: "db",
      threads: 1,
      di: { knexPgClient },
      // disable: true,
    },
    {
      name: "httpServer",
      threads: 1,
      di: [],
    },
  ],
});
