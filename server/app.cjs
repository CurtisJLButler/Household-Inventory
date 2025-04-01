const express = require('express');
const mongoose = require('mongoose');
const Items = require('./models/items.cjs');

const app = express();

require('dotenv').config();
const PORT = process.env.PORT;
const MONGO_DB = process.env.MONGO_DB;


app.use(express.json());


app.get('/api/items', async (req, res) => {
  try {
    const items = await Items.find();
    res.json(items);
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



mongoose.connect('mongodb://localhost:27017/household-inventory', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});