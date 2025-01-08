const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db'); // Ensure your `db.js` handles MongoDB connection
require('dotenv').config();
const PORT = process.env.PORT || 3000;

const Person = require('./models/person');
const Menu = require('./models/menu');

app.use(bodyParser.json());

// Corrected '/hello' route
app.get('/hello', async (req, res) => {
  res.send("Hello sir, how can I help you?");
});

// Import routes file
const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);

const menuRoutes = require('./routes/menuRoutes');
app.use('/menu', menuRoutes); // This is your base path for all menu routes

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
