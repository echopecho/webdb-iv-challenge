
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'taco shell'},
        {ingredient_name: 'cheese'},
        {ingredient_name: 'meat'},
        {ingredient_name: 'lettuce'},
        {ingredient_name: 'guacamole'},
        {ingredient_name: 'dough'},
        {ingredient_name: 'tomato sauce'},
        {ingredient_name: 'basil'} 
      ]);
    });
};
