const express = require('express');
const mongoose = require('mongoose');
const Items = require('./models/items.cjs');

const app = express();

require('dotenv').config();
const PORT = process.env.PORT;
const MONGO_DB = process.env.MONGO_DB;


app.use(express.json());

/*
Get, Post, Patch, Delete methods for
Displaying, adding, editing and deleting items in the database
*/

//Grabs all items or all items that are running low
app.get('/api/items', async (req, res) => {
  try {
    //Gets all items from the database
    var items
    if (!req.query.lowOn) {

      // Returns all items
      items = await Items.find();
      console.log("Getting all items")
    } else {
      // Returns only the items that are running low
        items = await Items.find({ isRunningLow: true });
        console.log("Getting all items that are running low")
    }
    //Sets res to the items found as json data
    res.json(items);
    
    
  } catch (err) {
    //returns server error
    res.status(500).json({ message: err.message });
  }
});

//Adds item or updates item if its already there
app.post('/api/items', async (req, res) => {
  try {
    const { item } = req.body;

    // Check if the item already exists by name
    const existingItem = await Items.findOne({ item });

    // if the item actually does exist, then
    // it will update the item instead of adding a new one
    if (existingItem) {
      // Item exists – perform update instead (PATCH logic)
      const updatedItem = await Items.findByIdAndUpdate(
        existingItem._id,
        req.body,
        { new: true }
      );
      console.log("Item already existed – updated it instead");
      return res.status(200).json(updatedItem);
    }

    // Item does not exist it creates a new item
    const newItem = new Items(req.body);
    const savedItem = await newItem.save();
    console.log("New item created");
    res.status(201).json(savedItem);
  } catch (err) {
      res.status(500).json({ message: err.message });
    }})

//Deletes item
app.delete('/api/items/:id', async (req,res) => {
  Items.findByIdAndDelete(req.params.id).exec()
  .then(result => {
    if (!result) {
        res.status(404).send();
    } else {
        res.status(200).send({
            message: "Object was deleted!",
            book: result
        });
    }
})
.catch(err => {
  if (err.name === "CastError") {
      res.status(400).send({ message: "Invalid ID Provided" });
  } else {
      res.status(500).send({ message });
  }
});
})


//Connects to MongoDB
mongoose.connect('mongodb://localhost:27017/household-inventory', {
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

//Starts the listening on port in the .env for http requests
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});