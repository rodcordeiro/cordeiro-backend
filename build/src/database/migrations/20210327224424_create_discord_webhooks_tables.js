exports.up = function (knex) {
    return knex.schema.createTable('webhooks', table => {
        table.increments();
        table.string('name');
        table.string('origin');
        table.text('webhook');
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
    });
};
exports.down = function (knex) {
    return knex.schema.dropTable('webhooks');
};
