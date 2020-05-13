const db = require("../models");

const express = require("express");

const router = express.Router();

const bcrypt = require("bcrypt");

router.get("/login", function (req, res) {
    res.send("Welcome Back!");
});

router.post("/login", function (req, res) {
    res.send("Signup Please");
    db.User.findOne({
        where: {
            email: req.body.email,
        }

    }).then(dbUser => {
        if (bcrypt.compareSync(req.body.password, dbUser.password)) {

            req.session.user = {

                email: dbUser.email,
                id: newUser.userId

            };

            res.send("Welcome");
        }
    }).catch(err => {
        console.log(err);
        res.redirect("/userSignup")
    });
});


module.exports = router;

