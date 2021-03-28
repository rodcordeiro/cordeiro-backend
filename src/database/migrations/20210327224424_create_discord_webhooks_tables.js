
exports.up = function(knex) {
  return knex.schema.createTable('webhooks',table=>{
      table.increments();
      table.string('name');
      table.string('origin');
      table.text('webhook');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('webhooks')
};
