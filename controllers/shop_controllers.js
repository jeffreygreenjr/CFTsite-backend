const express = require('express');
const { Shop } = require('../models');
const router = express.Router();
const db = require('../models');
const { populate } = require('../models/Shop');

// ------ALL COACHES ROUTE -------
router.get("/", async (req, res) => {
    try {
        const shop = await db.Shop.find({})
        res.json(shop);
    } catch(error) {
        res.status(400).json(error)
    }
});

module.exports = router;