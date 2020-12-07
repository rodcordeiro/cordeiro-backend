exports.up = function(knex) {
    return knex.schema.createTable('posts',(table)=>{
        table.increments();
        table.string('title').notNullable();
        table.text('text').notNullable();
        table.string('image').notNullable();
        table.string('tags');        
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('posts');
};
