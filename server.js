// Import Dependencies
const express = require("express");
// const controllers = require('./controllers')
const cors = require("cors");

// Declare a variable for our port number
const PORT = process.env.PORT || 4000;

/* SECTION DB CONNNECTION */
require('./config/db.connection');

const db = require('./models');

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
app.get("/fighters", async (req, res) => {
    try {
        const fighter = await db.Fighter.find({})
        res.json(fighter);
    } catch(error) {
        res.status(400).json(error)
    }
});

// route for retrieving shop items
app.get("/shop", (req, res) => {
    // send shop items via JSON
    res.json(shop);
  });



// turn on the server listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));