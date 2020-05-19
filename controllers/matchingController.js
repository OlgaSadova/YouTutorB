const db = require("../models");
const express = require("express");
const router = express.Router();


//const DemoUserSkillsArr = ["SQL", "HTML", "JavaScript"] // the real data will come from req.data

router.post("/api/matchskills", (req, res) => {
    const allTeachersID = []
     //console.log("##########################", req.body)
    const DemoUserSkillsArr= req.body
    db.TeacherSkill.findAll(
        {attributes: ["skill", "UserId"],
        //include: [{model: models.Product, attributes:[]}],
        where: {
            skill: DemoUserSkillsArr //req.body.data
        }}
        )
        .then(skillsArr => {
            //console.log(skillsArr)
            skillsArr.map(skill => {
                allTeachersID.push(skill.dataValues.UserId)
            })
            //arr.reduce(callback( accumulator, currentValue[, index[, array]] )[, initialValue])
            const HowManyTimesObj = allTeachersID.reduce(function(obj, b) {
                obj[b] = ++obj[b] || 1;
                return obj;
              }, {});

              const allTeacherFilterd = allTeachersID.filter(function(e, i){
                return allTeachersID.indexOf(e) >= i;
            });
            teacherResult = []
        //console.log("allTeacherFilterd", allTeacherFilterd)
        //console.log("HowManyTimesObj", HowManyTimesObj)
        allTeacherFilterd.forEach(teacher => {
            
            //console.log(` teacher ${teacher} has ${HowManyTimesObj[teacher]} matches result witch is ${Math.floor((HowManyTimesObj[teacher])/(DemoUserSkillsArr.length)*100)}%`)
            let test = {
                teacherID : teacher,
                percentageForYourSkills: Math.floor((HowManyTimesObj[teacher])/(DemoUserSkillsArr.length)*100)
            }
            teacherResult.push(test)
            

            
        });
        res.json(teacherResult)
        console.log(teacherResult)
        //move "teacherResult" to the front
    })
})

module.exports = router;
