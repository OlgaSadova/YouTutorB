const db = require("../models");

const express = require("express");

const router = express.Router();

const bcrypt = require("bcrypt");


router.get("/", function (req, res) {
    res.render("<h1> Signup Please </h1>");
});

router.post("/login", function (req, res) {
    
    db.User.findOne({
        where: {
            email: req.body.email
        }

    }).then(dbUser => {

        if (!dbUser) {
            req.session.user = false
            res.send("no user found")
        }
        else if (bcrypt.compareSync(req.body.password, dbUser.password)) {
            // res.send("CORRECT!")
            req.session.user = {

                email: dbUser.email,
                id: dbUser.id,


            };
            res.json(dbUser)
            // res.redirect("/profile");
        }
        
        else {
            req.session.user = false
            res.send("incorrect password")
        }
    }).catch(err => {
        console.log(err);
        res.redirect("/userSignup")
    });
});

router.get("/readsessions", (req, res) => {
    res.json(req.session)
})

router.get("/logout",(req,res)=>{
    req.session.destroy();
    res.json("logged out!")
})

module.exports = router;

