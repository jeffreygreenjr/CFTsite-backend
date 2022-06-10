const express = require('express');
const { Fighter } = require('../models');
const router = express.Router();
const db = require('../models');
const { populate } = require('../models/Fighter');

// ------ALL FIGHTERS ROUTE -------
router.get("/", async (req, res, next) => {
    try {
        const fighter = await db.Fighter.find({})
        const context = {fighter}
        return res.render(context)
    } catch (error) {
        req.error = error
        return next()
    }
})

// ------NEW FIGHTER ROUTE------
router.get("/create", (req, res) => {
    res.render('new')
})

// ------POST NEW FIGHTER ROUTE------
router.post("/", async (req, res, next) => {
    try {
        const createdFighter = await db.Fighter.create(req.body);
        console.log(`Here is the new ${createdFighter}`)
        res.redirect("/fighters");
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})