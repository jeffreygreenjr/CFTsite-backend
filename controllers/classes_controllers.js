const express = require('express');
const { Class } = require('../models');
const router = express.Router();
const db = require('../models');
const { populate } = require('../models/Class');

// ------ALL CLASSES ROUTE -------
router.get("/", async (req, res) => {
    try {
        const classId = await db.Class.find({})
        res.json(classId);
    } catch(error) {
        res.status(400).json(error)
    }
});

module.exports = router;