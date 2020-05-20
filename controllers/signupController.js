const db = require("../models");

const express = require("express");

const router = express.Router();



router.get("/userSignup", function (req, res) {
    res.render("index");
});



router.post("/userSignup", function (req, res) {

    // res.send("Signup Please");

    db.User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        picture: req.body.picture
        

    }).then( newUser => {
        req.session.user = newUser
        
        res.send(newUser);
    }).catch(err => {
        console.log(err);
        return res.redirect("/userSignup")
    });  /////////////////////////////// WE SHOULD PUT HERE IF STATMENT AND SEND RESULT LIKe: "EMAIL ALREADY IN USE"
});



module.exports = router;