const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://curtisjlbutler:<Ah0seHSFzeExabyd>@household-inventory.laubxeh.mongodb.net/?retryWrites=true&w=majority&appName=Household-Inventory', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});