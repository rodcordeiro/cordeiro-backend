exports.up = function (knex) {
    return knex.schema.alterTable("projects", function (table) {
        table.renameColumn('id', "old_id");
    });
};
exports.down = function (knex) {
    return knex.schema.alterTable("projects", function (table) {
        table.renameColumn('old_id', "id");
    });
};
