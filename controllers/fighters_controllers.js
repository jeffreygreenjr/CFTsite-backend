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

// ------POST NEW FIGHTERS ROUTE------
router.post('/', async(req,res)=>{
    const newFighter = new db.Fighter(req.body)
    try{
        const savedFighter = await newFighter.save()
        res.status(200).json(savedFighter)
    }catch(err){
        res.status(400).json(err)
    }
})

router.createPost = async (req, res) => {
    try {
      const post = await new Post(req.body).save();
      await post.populate("user", "first_name last_name cover picture username")
      res.json(post);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

module.exports = router;