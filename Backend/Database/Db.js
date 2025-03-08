const mongoose = require('mongoose');
require('dotenv').config();

// MongoDB connection string
const mongodb_connection = process.env.MONGODB_CONNECTION || process.env.MONGODB_CONNECTION_LOCAL;

// Mongoose connection using promises (no callback)
const connectDB = async () => {
    const res = await mongoose.connect(mongodb_connection)
    if(!res) {
        console.log("Error connecting to MongoDB");
    } else {
        console.log("MongoDB connected successfully at " + mongodb_connection);
    }
    
};

module.exports = connectDB;
