const express = require('express');
const { Coach } = require('../models');
const router = express.Router();
const db = require('../models');
const { populate } = require('../models/Coach');

// ------ALL COACHES ROUTE -------
router.get("/", async (req, res) => {
    try {
        const coach = await db.Coach.find({})
        res.json(coach);
    } catch(error) {
        res.status(400).json(error)
    }
});

module.exports = router;

