import _attribute from "../schemas/attribute.js";
import _region from "../schemas/region.js";
import _user from "../schemas/user.js";
import _venue from "../schemas/venue.js";

const tables = ["attributes", "regions", "users", "venues"];

export const up = async function (knex) {
	const attribute = _attribute(knex);
	const region = _region(knex);
	const user = _user(knex);
	const venue = _venue(knex);

	await knex.raw(`
  CREATE OR REPLACE FUNCTION update_updatedAt()
  RETURNS TRIGGER AS $$
  BEGIN
    NEW."updatedAt" = now();
    RETURN NEW;
  END;
  $$ language 'plpgsql';
`);

	await knex.schema
		.createTable("attributes", attribute)
		.createTable("regions", region)
		.createTable("users", user)
		.createTable("venues", venue);

	for (const table of tables) {
		await knex.raw(`
    CREATE TRIGGER updated
    BEFORE UPDATE
    ON ${table}
    FOR EACH ROW
    EXECUTE PROCEDURE update_updatedAt();
  `);
	}
};

export const down = async function (knex) {
	await knex.schema
		.dropTableIfExists("attributes")
		.dropTableIfExists("regions")
		.dropTableIfExists("users")
		.dropTableIfExists("venues");

	await knex.raw(`
      DROP FUNCTION IF EXISTS update_timestamp() CASCADE;
    `);
};
