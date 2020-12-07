
exports.up = function(knex) {
  return knex.schema.createTable('projects',(table)=>{
      table.increments()
      table.string('title').notNullable();
      table.text('description').notNullable();
      table.string('tags').notNullable();
      table.text('image').notNullable();
      table.string('url');
      table.string('repository');
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('projects');
};
