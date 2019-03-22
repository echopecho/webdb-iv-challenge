const knex = require('knex');
const dbConfig = require('../knexfile.js');

const db = knex(dbConfig.development);

module.exports = {
  getDishes: () => {
    return db('dishes');
  },

  addDish: (dish) => {
    return db('dishes').insert(dish);
  },

  getDish: (id) => {
    return db('dishes').where({ id: id }).first();
  },

  getRecipes: () => {
    return db('recipes');
  },

  addRecipe: (recipe) => {
    return db('recipes').insert(recipe);
  },

  getRecipe: async (id) => {
    const recipe = await db.select('dish_name', 'recipe_name', 'ingredient_name', 'quantity')
      .from('recipes')
      .innerJoin('dishes', 'dish_id', 'dishes.id')
      .join('ingredients-for-recipes', 'recipes.id', 'recipe_id')
      .leftJoin('ingredients', 'ingredient_id', 'ingredients.id')
      .where('recipes.id', id );
    
    return {
      dish: recipe[0].dish_name,
      recipe: recipe[0].recipe_name,
      ingredients: recipe.map(ingredient => {
        return {name: ingredient.ingredient_name, quantity: ingredient.quantity}})
    }
  }
}