
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients-for-recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients-for-recipes').insert([
        {recipe_id: 1, ingredient_id: 1, quantity: 4},
        {recipe_id: 1, ingredient_id: 2, quantity: 10.25},
        {recipe_id: 1, ingredient_id: 3, quantity: 2},
        {recipe_id: 1, ingredient_id: 4},
        {recipe_id: 2, ingredient_id: 1, quantity: 8},
        {recipe_id: 2, ingredient_id: 2, quantity: 2.6},
        {recipe_id: 2, ingredient_id: 3, quantity: 4},
        {recipe_id: 2, ingredient_id: 5, quantity: 1},
        {recipe_id: 3, ingredient_id: 6, quantity: 1},
        {recipe_id: 3, ingredient_id: 2, quantity: 7},
        {recipe_id: 3, ingredient_id: 7, quantity: 2},
        {recipe_id: 3, ingredient_id: 8, quantity: 3},
      ]);
    });
};
