const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db'); // Ensure your `db.js` handles MongoDB connection
require('dotenv').config();
const PORT =process.env.PORT || 3000;

const Person = require('./models/person');
const Menu = require('./models/menu');

app.use(bodyParser.json());

// import routes file
const personRoutes=require('./routes/personRoutes')
app.use('/person',personRoutes);
const menuRoutes=require('./routes/menuRoutes');
app.use('/menu',menuRoutes);


// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
