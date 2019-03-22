
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients-for-recipes', table => {
    table.integer('recipe_id')
      .unsigned()
      .references('id')
      .inTable('recipes')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    table.integer('ingredient_id')
      .unsigned()
      .references('id')
      .inTable('ingredients')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    table.float('quantity')
      .defaultTo(1);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ingredients-for-recipes');
};
