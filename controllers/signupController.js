const db = require("../models");

const express = require("express");

const router = express.Router();



router.get("/", function (req, res) {
    res.render("index");
});

router.post("/userSignup", function (req, res) {
    res.send("Signup Please");
    db.user.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        zipcode: req.body.zipcode

    }).then( newUser => {
   
        req.session.user = {
            email: newUser.email,
            id: newUser.UserId
        };
        res.send("Welcome");
    }).catch(err => {
        console.log(err);
        res.redirect("/userSignup")
    });
});

router.post("/tutorSignup", function (req, res) {
    res.send("Signup Please");
    db.tutor.create({
        levels: [],
        skills:[],
        picture:req.body.picture
    }).then( newTutor => {
   
        req.session.user = {
            email: newTutor.email,
            id: newTutor.tuorId
        };
        res.send("Welcome");
    }).catch(err => {
        console.log(err);
        res.redirect("/tutorSignup")
    });
});