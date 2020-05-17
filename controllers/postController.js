const db = require("../models");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");


//get all the posts

router.get("/posts/user", function (req, res) {
    res.send("see all posts");
});

//get all users own posts
router.get("/posts/saved", function (req, res) {
    console.log("hi");
    db.Studentpost.findAll({
        where: {
            email: req.session.user.id
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
        console.log(req.body);
        
    db.Studentpost.create({
        level: req.body.level,
        post: req.body.post,
        UserId: req.session.user.id

    }).then(function (newPost) {
        res.json(newPost)
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})


router.delete("/posts/:delete", function (req, res) {
    db.Studentpost.destroy({

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