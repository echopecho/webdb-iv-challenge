 const db = require('./data/dbHelper.js');


 db.getDish(2)
 .then(dishes => {
   console.log(dishes);
 }).catch(err => {
   console.log(err);
 })