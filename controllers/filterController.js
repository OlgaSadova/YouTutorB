

//realdb:
const db = require("../models");
const express = require("express");
const router = express.Router();


/*
router.get("/api/searchresult", (req, res) => {
    //console.log(req.body.data)

    db.skill.findAll(
        {attributes: ["skill"],
            where: {
        skill: "SQL" //req.body.data
    }}).then(skill => {
        
        res.json(skill)
    })
})
*/

router.get("/api/searchresult", (req, res) => {
    //console.log(req.body.data)
    db.skill.findAll(
        {attributes: ["skill"],
        raw: true}
        ).then(skill => {
            //  console.log(skill[0].dataValues.skill)
        
        res.json(skill)
    })
})

/*
router.get("/api/searchresult", (req, res) => {
    //console.log(req.body.data)
    db.skill.findAll({
        where: {
            id: req.params.id
        }
        //take all skills list (db.Skill.skill)
    }).then(skillsArry) {
        filteredSkills = skillsArry.filter(skill => {
            console.log(skilres.json(skill))
            if (skill.toLowerCase().includes(req.body.data)) {
                console.log
                return filteredSkills
              } else {
                return false
              }
        })
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})
*/

module.exports = router;