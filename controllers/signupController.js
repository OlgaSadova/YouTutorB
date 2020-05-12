const db = require("../models");

const express = require("express");

const router = express.Router();



router.get("/userSignup", function (req, res) {
    res.render("index");
});

router.post("/userSignup", function (req, res) {
    res.send("Signup Please");
    db.User.create({
        first_name: req.body.firstname,
        last_name: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        zipcode: req.body.zipcode

    }).then( newUser => {
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

router.post("/tutorSignup", function (req, res) {
    res.send("Signup Please");
    db.Teacher.create({
        levels: [],
        skills:[],
        picture:req.body.picture
    }).then( newTutor => {
        req.session.user = {
            email: newTutor.email,
            id: newTutor.email
        };
        res.send("Welcome");
    }).catch(err => {
        console.log(err);
        res.redirect("/tutorSignup")
    });
});