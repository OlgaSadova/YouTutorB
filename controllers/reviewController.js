const db = require("../models");

const express = require("express");

const router = express.Router();

const bcrypt = require("bcrypt");

router.get("/teacherReview", function (req, res) {
    res.render("review page");
})

router.post("/teacherReview", function (req, res) {
    db.review.create({
        rating: req.body.rating,
        review: req.body.review

    }).then(function () {
        res.send("new review!")

    }).catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
})



module.exports = router;
