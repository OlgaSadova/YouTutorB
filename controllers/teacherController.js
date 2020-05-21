const db = require("../models");
const express = require("express");
const router = express.Router();


router.get("/signup/teacher", function (req, res) {
    res.render("index");
});

router.delete("/api/techerskillsdelete", function (req, res) {
    console.log(req.session.user.id);
     
 db.TeacherSkill.destroy({
     where: {
         UserId: req.session.user.id
     }
 }).then(result => {
     console.log("DELETED STUFF: " + result);
     res.json(result)
 }).catch(err => {
     console.log(err);
     res.status(500).json(err);
 });
 
    
 })

router.delete("/posts/deleteTeacher/currentuser", function (req, res) {
    db.Teacher.destroy({

        where: {
            UserId: req.session.user.id
        }
    }).then(data => {
        res.json(data);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})



router.post("/skillsteacher", function (req, res) {
    if(req.body) {
        req.body.forEach(newSkill => {
            db.TeacherSkill.create({
                skill: newSkill,
                UserId: req.session.user.id
    }).then(result => {
        //console.log(result);
        res.json(result)
    }).catch(err => {
        console.log(err);
        
    });
})
}})

router.get("/getTeacherSkills/:id", function (req,res) {
    //console.log(req.params.id);
    
    db.TeacherSkill.findAll({
        where: {
            UserId: req.params.id
        }

    })
    .then(list => {
        res.json(list);
    })
    .catch(err => {
        console.log(err);
        
    });
})


router.post("/signup/teacher", function (req, res) {
        // information about teacher goes to teacher id table
    db.Teacher.create({ 
        about: req.body.about,
        YearsofExperience:req.body.YearsofExperience,
        UserId: req.session.user.id

    }).then(newTeacher => {
        res.json(newTeacher)
        
    //console.log(newTeacher);
        
        
    }).catch(err => {
        console.log(err);
        
    });
});

  

module.exports = router;