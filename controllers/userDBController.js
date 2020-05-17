const db = require("../models");
const express = require("express");
const router = express.Router();

// GET ALL USER SKILLS WHEN HE SIGNING IN
// router.get("/api/userskiils", function (req, res) {
//     res.render("index");
// });

//save user skills when he is doing search
router.post("/api/userskills", function (req, res) {
    if(req.body) {
        req.body.forEach(newSkill => {
            db.StudentSkill.create({
                skill: newSkill
                //user_Id : name //from the front
    }).then(result => {
            
        console.log(result);
        
        // req.session.user = {
        //     email: newUser.email,
        //     id: newUser.email
        //};
        
    }).catch(err => {
        console.log(err);
        
    });
})
}})
module.exports = router;