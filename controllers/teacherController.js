const db = require("../models");

const express = require("express");

const router = express.Router();

const bcrypt = require("bcrypt");

router.get("/signup/teacher", function (req, res) {
    res.render("index");
});

router.post("/signup/teacher", function (req, res) {
    console.log(req.body);
    db.Teacher.create({
        skills: req.body.skills,
        levels: req.body.levels,
        about: req.body.about,
        // dob: req.body.dob,
        picture: req.body.picture

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

module.exports = router;