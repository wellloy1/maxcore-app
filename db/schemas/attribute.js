export default (knex) => (table) => {
	table.increments("id").notNullable().primary();
	table.string("name").notNullable().unique();
	table.jsonb("variants").notNullable().defaultTo("{}");
	table.boolean("isDeleted").defaultTo(false);
	table.timestamps(true, true, true);
};
