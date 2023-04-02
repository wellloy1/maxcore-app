export default (knex) => (table) => {
	table.increments("id").notNullable().primary();
	table.string("country").notNullable().unique();
	table.jsonb("params").notNullable().defaultTo("{}");
	table.boolean("isDeleted").defaultTo(false);
	table.timestamps(true, true, true);
};
