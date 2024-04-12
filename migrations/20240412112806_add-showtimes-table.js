/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable("showtimes", (table) => {
    table.increments("id").primary();
    table.string("city").notNullable();
    table.string("title").notNullable();
    table.string("showtimes").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("showtimes");
};
