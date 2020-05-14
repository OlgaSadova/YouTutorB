const db = require("../models");

const express = require("express");

const router = express.Router();

const bcrypt = require("bcrypt");


//get all the posts

router.get("/posts/user", function (req, res) {
    res.send("see all posts");
});

//get all users own posts

router.get("/posts", function (req, res) {
    console.log("hi");
    db.studentpost.findAll({
        where: {
            level: req.session.user.level
        }
    }).then(function (savedPost) {
        res.json(savedPost)

    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

// new posts route

router.post("/posts", function (req, res) {

    db.studentpost.create({
        level: req.body.level,
        skill: req.body.skill,
        post: req.body.posts

    }).then(function (newPost) {
        res.json(newPost)
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})


router.delete("/posts/:delete", function (req, res) {
    db.studentpost.destroy({

        where: {
            id: req.params.id
        }
    }).then(data => {
        res.json(data);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})


module.exports = router;