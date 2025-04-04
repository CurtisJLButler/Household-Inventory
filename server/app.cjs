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
app.get('/api/items', async (req, res) => {
  try {
    const items = await Items.find();
    res.json(items);
    console.log("Getting data")
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/api/items/:id', async (req, res) => {
  try {
    const items = await Items.findById(req.params.id).exec()
    res.json(items);
    console.log("Getting data")
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/api/items', async (req, res) => {
  try {
    const newItem = new Items(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.patch('/api/items/:id', async (req, res) => {
  try {
    const updatedItem = await Items.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    
    if (!updatedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
    
    res.json(updatedItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.delete('api/items/:id', async (req,res) => {
  Items.findByIdAndDelete(req.params.id).exec()
  .then(result => {
    if (!result) {
        // If no book was found
        res.status(404).send(); // This is fine, but let's ensure this path is not left unhandled
    } else {
        // If deletion was successful, but we're missing the proper response status
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
      res.status(500).send({ message: "Server error, come back soon" });
  }
});
})



mongoose.connect('mongodb://localhost:27017/household-inventory', {
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});