//realdb:
const db = require("../models");
const express = require("express");
const router = express.Router();

// GET ALL GENERIC SKILLS to the front ***(WE HAVE SEEDS FILE FOR THAT)***
router.get("/api/searchresult", (req, res) => {
    //console.log(req.body.data)
    db.AllSkill.findAll(
        {attributes: ["skill"],
        raw: true}
        ).then(skill => {        
            return res.json(skill)
    })
})
module.exports = router;

