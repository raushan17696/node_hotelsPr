

const mongoose = require('mongoose');
require('dotenv').config();

const mongoURL = process.env.MONGODB_URL;

mongoose.connect(mongoURL)
    .then(() => console.log('Connected to MongoDB server'))
    .catch(err => console.error('MongoDB connection error:', err));

const db = mongoose.connection;

// Define event listeners for database connections
db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
    console.log('MongoDB server disconnected');
});

// Export the db connection to server.js
module.exports = db;
