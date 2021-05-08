exports.up = function (knex) {
    return knex.schema.createTable('books', function (table) {
        table.increments();
        table.string('title').notNullable();
        table.string('author');
        table.string('serie');
    });
};
exports.down = function (knex) {
    return knex.schema.dropTable('books');
};
