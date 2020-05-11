const db = require("../models");

const express = require("express");

const router = express.Router();

const bcrypt = require("bcrypt");

router.get("/login", function (req, res) {
    res.send("Welcome Back!");
});

router.post("/login", function (req, res) {
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