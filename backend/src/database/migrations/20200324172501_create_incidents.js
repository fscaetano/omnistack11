
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table) {
        // primary key
        table.increments();

        // incident data
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        // relationship
        table.string('ngo_id').notNullable();
        table.foreign('ngo_id').references('id').inTable('ngos');
    } );
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');  
};
