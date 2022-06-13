const express = require('express');
const { Fighter } = require('../models');
const router = express.Router();
const db = require('../models');
const { populate } = require('../models/Fighter');

// -------ALL FIGHTERS ROUTE -------
router.get("/", async (req, res) => {
    try {
        const fighter = await db.Fighter.find({})
        res.json(fighter);
    } catch(error) {
        res.status(400).json(error)
    }
});

// ------SHOW FIGHTER ROUTE -------
router.get("/:id", async (req, res) => {
    try {
        const fighterId = await db.Fighter.findById(req.params.id)
        res.status(200).json(fighterId)
    } catch(error) {
        res.status(400).json(error)
    }
})

// ------CREATE/POST FIGHTERS ROUTE ------- 
router.post('/create', async (req, res) =>{
    try {
        res.json(await db.Fighter.create(req.body))
    } catch(error) {
        res.status(400).json(error)
    }
})

// -----EDIT/UPDATE FIGHTER ROUTE ------
router.put("/:id", async (req, res) => {
    try {
        res.json(await db.Fighter.findByIdAndUpdate(req.params.id, req.body))
    } catch(error) {
        res.status(400).json(error)
    }
})

// -----DELETE FIGHTER ROUTE ------
router.delete("/:id", async (req, res) => {
    try {
        res.json (await db.Fighter.findByIdAndRemove(req.params.id))
    } catch(error) {
        res.status(400).json(error)
    }
})

module.exports = router;