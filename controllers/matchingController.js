const db = require("../models");
const express = require("express");
const router = express.Router();


<<<<<<< HEAD
const DemoUserSkillsArr = ["SQL", "MySQL","HTML"] // the real data will come from req.data
=======
const DemoUserSkillsArr = ["SQL", "HTML", "JavaScript"] // the real data will come from req.data
>>>>>>> development

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
                percentage: Math.floor((HowManyTimesObj[teacher])/(DemoUserSkillsArr.length)*100)
            }
            teacherResult.push(test)
            

            
        });
        console.log(teacherResult)
        //move "teacherResult" to the front
    })
})

module.exports = router;
<<<<<<< HEAD


=======
>>>>>>> development
