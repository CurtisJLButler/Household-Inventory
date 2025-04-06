const mongoose = require('mongoose');

 
 const itemSchema = new mongoose.Schema({
   // Item name
   item: { type: String, required: true },
   // Quantity is string so that user can specify certian things like
   // "11 kg", "200 grams", "1 cup", instead of just having 11, 200, 1
   quantity: { type: String },
   // This tells the app wether an item needs to be put on the shopping list
   isRunningLow: { type: Boolean, default: false },
   // Notes allows a user to specify things like, sales, 
   // if there's a brand they want to check out next time they buy
   // if they wanna state that it's important that it gets bought soon
   // or other stuff if they are adding it and someone else is picking the stuff up
   notes: { type: String}
 });
 
 const Item = mongoose.model('Item', itemSchema);
 
 module.exports = Item;

