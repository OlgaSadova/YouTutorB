const db = require("../models");
const express = require("express");
const router = express.Router();




router.get("/api/matchskills", (req, res) => {
    //console.log(req.body.data)
    db.TeacherSkill.findAll(
        {attributes: ["id","skill"],
        //include: [{model: models.Product, attributes:[]}],
        where: {
            skill: "SQL" || "HTML" //req.body.data
        }}
        )
        .then(skill => {
        
        console.log(skill)
        res.json(skill)
    })
})

module.exports = router;