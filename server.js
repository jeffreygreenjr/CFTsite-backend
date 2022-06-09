// Import Dependencies
const express = require("express");
const cors = require("cors");

// Mongoose is a Object Data Modeling (ODM) library for 
// MongoDB distributed as an npm package.
const mongoose = require("mongoose");

// configures and gives access to .env file object
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)
    .then( () => {
        console.log(`[${new Date().toLocaleTimeString()}] - MongoDB connected ... 🙌 🙌 🙌`);
    })
    .catch( (error) => {
        console.log('MongoDB connection error 😥', error)
})

// Import JSON files
const about = require("./about.json");
const classes = require("./classes.json");
const coaches = require("./coaches.json");
const fighters = require("./fighters.json");
const shop = require("./shop.json");

// Create our app object
const app = express();

// set up middleware
app.use(cors());

//home route for testing our app
app.get("/", (req, res) => {
  res.send("Hello World");
});

// route for retrieving about info
app.get("/about", (req, res) => {
  // send projects via JSON
  res.json(about);
});

// route for retrieving classes
app.get("/classes", (req, res) => {
    // send classes via JSON
    res.json(classes);
});

// route for retrieving coaches
app.get("/coachingstaff", (req, res) => {
    // send coaches via JSON
    res.json(coaches);
});

// route for retrieving fighters
app.get("/fighters", (req, res) => {
    // send fighters via JSON
    res.json(fighters);
});

// route for retrieving shop items
app.get("/shop", (req, res) => {
    // send shop items via JSON
    res.json(shop);
  });

//declare a variable for our port number
const PORT = process.env.PORT || 4000;

// turn on the server listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));