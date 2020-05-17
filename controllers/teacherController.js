const db = require("../models");
const express = require("express");
const router = express.Router();


router.get("/signup/teacher", function (req, res) {
    res.render("index");
});



router.post("/signup/teacher/api/teacherkills", function (req, res) {
    req.body.skill.forEach(newSkill => {
        //teaching skill comes from the front as a array and goes to TeachSkill table
        db.TeacherSkill.create({
            skill: newSkill
            //Teacher_id : name //from the front
        })
    })

router.post("/signup/teacher", function (req, res) {
        // information about teacher goes to teacher id table
    db.Teacher.create({ 
        levels: req.body.levels,
        about: req.body.about,
        // dob: req.body.dob,
        picture: req.body.picture,
        UserId: req.session.user.id

    }).then(newTeacher => {
        res.json(newTeacher)
        
    console.log(newTeacher);
        
        // req.session.user = {
        //     email: newUser.email,
        //     id: newUser.email
        //};
        
    }).catch(err => {
        console.log(err);
        
    });
});


//save user skills when he is doing search
router.post("/api/teacherkills", function (req, res) {
    req.body.skill.forEach(newSkill => {
        //teaching skill comes from the front as a array and goes to TeachSkill table
        db.TeacherSkill.create({
            skill: newSkill
            //Teacher_id : name //from the front
        })
    }).then(result => {
        // req.session.user = {
        //     email: newUser.email,
        //     id: newUser.email
        //};
    }).catch(err => {
        console.log(err);
        
    });
})
})
        

module.exports = router;