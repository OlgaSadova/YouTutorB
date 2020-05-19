const db = require("../models");
const express = require("express");
const router = express.Router();


const DemoUserSkillsArr = ["SQL", "HTML"] // the real data will come from req.data

router.get("/api/matchskills", (req, res) => {
    const allTeachersID = []

    //console.log(req.body.data)
    db.TeacherSkill.findAll(
        {attributes: ["skill", "UserId"],
        //include: [{model: models.Product, attributes:[]}],
        where: {
            skill: DemoUserSkillsArr //req.body.data
        }}
        )
        .then(skillsArr => {
            console.log(skillsArr)
            skillsArr.map(skill => {
                allTeachersID.push(skill.dataValues.UserId)
            })
            const HowManyTimesObj = allTeachersID.reduce(function(obj, b) {
                obj[b] = ++obj[b] || 1;
                return obj;
              }, {});

              const allTeacherFilterd = allTeachersID.filter(function(e, i){
                return allTeachersID.indexOf(e) >= i;
            });

        console.log("allTeacherFilterd", allTeacherFilterd)
        console.log("HowManyTimesObj", HowManyTimesObj)
        allTeacherFilterd.forEach(teacher => {
            console.log(` teacher ${teacher} has ${HowManyTimesObj[teacher]} matches result witch is ${(HowManyTimesObj[teacher])/(DemoUserSkillsArr.length)*100}%`)
            

            
        });
    })
})

module.exports = router;
