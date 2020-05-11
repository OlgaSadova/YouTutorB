const db = require("../models");

const express = require("express");

const router = express.Router();

const bcrypt = require("bcrypt");

router.get("/login", function (req, res) {
    res.send("Welcome Back!");
});

router.post("/login", function (req, res) {
    res.send("Signup Please");
    db.user.findOne({
        where: {
            email: req.body.email
        }


    }).then(newUser => {
        if (bcrypt.compareSync(req.body.password, dbUser.password)) {
            req.session.user = {
                username: dbUser.username,
                id: dbUser.userId
            };
            // res.send("logged in!")
            res.redirect('/locations/user');
        }
    }).catch(err => {
        // console.log(err);
        // res.status(404).json(err);
        res.redirect('/login');
    });
});