const db = require("../models");
const express = require("express");
const router = express.Router();


router.get("/signup/teacher", function (req, res) {
    res.render("index");
});



router.post("/skillsteacher", function (req, res) {
    console.log(req.body);
    req.body.forEach(newSkill => {
        //teaching skill comes from the front as a array and goes to TeachSkill table
        console.log(newSkill);
        
        db.TeacherSkill.create({
            skill: newSkill,
            UserId : req.session.user.id
        })
    // console.log("skillsteacher");
    
    })
})


router.post("/signup/teacher", function (req, res) {
        // information about teacher goes to teacher id table
    db.Teacher.create({ 
        // levels: req.body.levels,
        about: req.body.about,
        // dob: req.body.dob,
        picture: req.body.picture,
        UserId: req.session.user.id

    }).then(newTeacher => {
        res.json(newTeacher)
        
    console.log(newTeacher);
        
        
    }).catch(err => {
        console.log(err);
        
    });
});

  

module.exports = router;