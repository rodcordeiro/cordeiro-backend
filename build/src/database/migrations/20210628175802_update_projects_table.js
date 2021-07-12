exports.up = function (knex) {
    return knex.schema.alterTable("projects", function (table) {
        table.string('id').primary();
        table.dropColumn('old_id');
    });
};
exports.down = function (knex) {
    return knex.schema.alterTable("projects", function (table) {
        table.increments('old_id');
        table.dropColumn('id');
    });
};
