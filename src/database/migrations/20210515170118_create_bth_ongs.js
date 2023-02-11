exports.up = function (knex) {
  return knex.schema.createTable('bth_ongs', function (table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
    table.string('user_id').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('bth_ongs');
};
