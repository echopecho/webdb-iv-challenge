
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', table => {
    table.increments();
    table.string('recipe_name')
      .notNullable();
    table.integer('dish_id')
     .unsigned()
     .references('id')
     .inTable('dishes')
     .onDelete('CASCADE')
     .onUpdate('CASCADE');
    table.string('instructions')
      .notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes');
};
