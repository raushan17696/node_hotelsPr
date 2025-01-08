const mongoose = require('mongoose');
require('dotenv').config();

const mongoURL = process.env.MONGODB_URL;

// Validate the environment variable
if (!mongoURL) {
    console.error('Error: MONGODB_URL environment variable is not set.');
    process.exit(1);
}

// Connect to MongoDB with additional SSL configuration
mongoose.connect(mongoURL, {
    ssl: true,  // Ensuring SSL is explicitly used
    retryWrites: true,
    w: 'majority',
})
    .then(() => console.log('Connected to MongoDB successfully'))
    .catch(err => {
        console.error('MongoDB connection error:', err.message);
        process.exit(1); // Exit process if connection fails
    });

// MongoDB connection event listeners
mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error('Mongoose connection error:', err.message);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected from MongoDB');
});

// Graceful shutdown
process.on('SIGINT', async () => {
    await mongoose.connection.close();
    console.log('Mongoose connection closed due to app termination');
    process.exit(0);
});

module.exports = mongoose;
