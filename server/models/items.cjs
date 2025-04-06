const mongoose = require('mongoose');
<<<<<<< Updated upstream

const itemSchema = new mongoose.Schema({
  item: { type: String, required: true },
  quantity: { type: Number },
//   completed: { type: Boolean, default: false }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
=======
 
 const itemSchema = new mongoose.Schema({
   item: { type: String, required: true },
   quantity: { type: String },
   isRunningLow: { type: Boolean, default: false },
   notes: { type: String}
 });
 
 const Item = mongoose.model('Item', itemSchema);
 
 module.exports = Item;
>>>>>>> Stashed changes
