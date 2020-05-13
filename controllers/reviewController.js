const db = require("../models");

const express = require("express");

const router = express.Router();

const bcrypt = require("bcrypt");

<<<<<<< HEAD
router.get("/teacherreview" , function (req, res){
=======
router.get("/teacherReview", function (req, res) {
>>>>>>> be1f1e50d05741cf502587135300013be571f5f2
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
<<<<<<< HEAD


module.exports = router;
=======
>>>>>>> be1f1e50d05741cf502587135300013be571f5f2
