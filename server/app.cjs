const express = require('express');
const mongoose = require('mongoose');
const Task = require('./models/task');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());


app.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});




mongoose.connect('mongodb://localhost:27017', {
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