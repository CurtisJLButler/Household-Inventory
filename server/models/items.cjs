const mongoose = require('mongoose');
 
 const itemSchema = new mongoose.Schema({
   item: { type: String, required: true },
   quantity: { type: Number },
   isRunningLow: { type: Boolean, default: false },
   notes: { type: String}
 });
 
 const Item = mongoose.model('Item', itemSchema);
 
 module.exports = Item;