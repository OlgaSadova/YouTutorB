const db = require("../models");

const express = require("express");

const router = express.Router();



router.get("/", function (req, res) {
    res.render("index");
});

router.post("/studentSignup", function (req, res) {
    res.send("Signup Please");
    db.student.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password
    }).then( newStudent => {
   
        req.session.user = {
            email: newStudent.email,
            id: newStudent.studentId
        };
        res.send("Welcome");
    }).catch(err => {
        console.log(err);
        res.redirect("/studentSignup")
    });
});

router.post("/tutorSignup", function (req, res) {
    res.send("Signup Please");
    db.tutor.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password
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