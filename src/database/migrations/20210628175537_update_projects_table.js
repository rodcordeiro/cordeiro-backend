
exports.up = function(knex) {
    return knex.schema.alterTable("projects",(table)=>{
        table.renameColumn('id',"old_id")
        // table.string('id').primary().notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.alterTable("projects",(table)=>{
        table.renameColumn('old_id',"id")
        // table.dropColumn('id')
    })
};
