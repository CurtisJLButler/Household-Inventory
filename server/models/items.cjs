const mongoose = require('mongoose');
 
 const itemSchema = new mongoose.Schema({
   item: { type: String, required: true },
   quantity: { type: Number },
 //   completed: { type: Boolean, default: false }
 });
 
 const Item = mongoose.model('Item', itemSchema);
 
 module.exports = Item;