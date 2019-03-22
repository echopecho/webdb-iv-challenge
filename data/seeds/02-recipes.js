
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'Tex-mex', dish_id: 1, instructions: 'Just keep adding cheese'},
        {recipe_name: 'Granny', dish_id: 1, instructions: 'Make with love and serve with a check for $12.50'},
        {recipe_name: 'Margherita', dish_id: 2, instructions: 'Forgit about it!'}
      ]);
    });
};
