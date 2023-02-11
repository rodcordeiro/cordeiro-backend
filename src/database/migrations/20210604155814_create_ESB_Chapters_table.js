exports.up = function (knex) {
  return knex.schema.createTable('esb_chapters', function (table) {
    table.increments();
    table.string('title').notNullable();
    table.text('text').notNullable();
    table.string('author');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('esb_chapters');
};
