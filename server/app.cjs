const express = require('express');
const mongoose = require('mongoose');
const Items = require('./models/items.cjs');

const app = express();
const PORT = process.env.PORT || 3000;


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