
exports.up = function(knex) {
    return knex.schema.createTable('esb_chapters',function(table){
        table.increments();
        table.string('title').notNullable();
        table.text('text').notNullable();
        table.string('author');
});
}
exports.down = function(knex) {
    return knex.schema.dropTable('esb_chapters')
};
