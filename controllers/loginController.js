const db = require("../models");

const express = require("express");

const router = express.Router();

const bcrypt = require("bcrypt");

router.get("/", function (req, res) {
    res.send("");
});

router.post("/login", function (req, res) {
    res.send("");
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

            res.redirect("/profile");
        }
    }).catch(err => {
        console.log(err);
        res.redirect("/userSignup")
    });
});


module.exports = router;

