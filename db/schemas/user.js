export default (knex) => (table) => {
	table.increments("id").notNullable().primary();
	table.string("email").unique().notNullable().defaultTo("{}");
	table.string("password").notNullable();
	table.jsonb("oauth").notNullable().defaultTo("{}");
	table.jsonb("info").notNullable().defaultTo("{}");
	table.jsonb("options").notNullable().defaultTo("{}");
	table.jsonb("system").notNullable().defaultTo("{}");
	table.jsonb("sessions").notNullable().defaultTo("{}");
	table.string("comment").notNullable().defaultTo("");
	table.boolean("isDeleted").defaultTo(false);
	table.timestamps(true, true, true);
};
