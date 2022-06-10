const express = require('express');
const { Fighter } = require('../models');
const router = express.Router();
const db = require('../models');
const { populate } = require('../models/Fighter');

// ------ALL FIGHTERS ROUTE -------
router.get("/", async (req, res) => {
    try {
        const fighter = await db.Fighter.find({})
        res.json(fighter);
    } catch(error) {
        res.status(400).json(error)
    }
});

module.exports = router;