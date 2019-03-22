 const db = require('./data/dbHelper.js');


 db.getRecipe(1)
 .then(dishes => {
   console.log(dishes);
 }).catch(err => {
   console.log(err);
 })