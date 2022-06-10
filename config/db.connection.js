// Mongoose is a Object Data Modeling (ODM) library for 
// MongoDB distributed as an npm package.
const mongoose = require("mongoose");

// configures and gives access to .env file object
require('dotenv').config();

// get the MongoDB URL from .env file
const connectionStr = process.env.MONGODB_URI;

mongoose.connect(connectionStr)
    .then( () => {
        console.log(`[${new Date().toLocaleTimeString()}] - MongoDB connected ... 🙌 🙌 🙌`);
    })
    .catch( (error) => {
        console.log('MongoDB connection error 😥', error)
})