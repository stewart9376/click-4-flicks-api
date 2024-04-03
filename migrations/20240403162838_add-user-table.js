/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable("movies", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.string("genre").notNullable();
    table.string("happy_ending").notNullable();
    table.string("minutes").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
