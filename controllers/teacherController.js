const db = require("../models");

const express = require("express");

const router = express.Router();

const bcrypt = require("bcrypt");

router.get("/signupteacher", function (req, res) {
    res.render("index");
});

router.post("/signupteacher", function (req, res) {
    res.send("Signup Please");
    db.Teacher.create({
        skills: req.body.skills,
        levels: req.body.levels,
        about: req.body.about,
        dob: req.body.dob,
        picture: req.body.picture

    }).then(newTeacher => {
        req.session.user = {
            email: newUser.email,
            id: newUser.email
        };
        res.send("Welcome");
    }).catch(err => {
        console.log(err);
        res.redirect("/userSignup")
    });
});
module.exports = router;