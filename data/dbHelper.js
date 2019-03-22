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
  }
}