export default (knex) => (table) => {
	table.increments("id").notNullable().primary();
	table.string("alias").unique();
	table.jsonb("props").notNullable().defaultTo("{}");
	table.jsonb("address").notNullable().defaultTo("{}");
	table.jsonb("options").notNullable().defaultTo("{}");
	table.jsonb("content").notNullable().defaultTo("{}");
	table.jsonb("admins").notNullable().defaultTo("{}");
	table.jsonb("system").notNullable().defaultTo("{}");
	table.jsonb("history").notNullable().defaultTo("{}");
	table.string("comment").notNullable().defaultTo("");
	table.boolean("isDeleted").defaultTo(false);
	table.timestamps(true, true, true);
};
