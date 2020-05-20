const db = require("../models");
const express = require("express");
const router = express.Router();


//const DemoUserSkillsArr = ["SQL", "HTML", "JavaScript"] // the real data will come from req.data

router.post("/api/matchteacherskills", (req, res) => {
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



router.post("/api/matchstudentskills", (req, res) => {
    const allStudentsID = []
    const DemoUserSkillsArr= req.body
    db.StudentSkill.findAll(
        {attributes: ["skill", "UserId"],
        //include: [{model: models.Product, attributes:[]}],
        where: {
            skill: DemoUserSkillsArr //req.body.data
        }}
        )
        .then(skillsArr => {
            skillsArr.map(skill => {
                allStudentsID.push(skill.dataValues.UserId)
                console.log("$$$$$$$$$$$$$$$$$$$########################################## allStudentsID",allStudentsID)
                

            })
            //arr.reduce(callback( accumulator, currentValue[, index[, array]] )[, initialValue])
            const HowManyTimesObj = allStudentsID.reduce(function(obj, b) {
                obj[b] = ++obj[b] || 1;
                return obj;
              }, {});
              console.log("$$$$$$$$$$$$$$$$$$$###########################################HowManyTimesObj",HowManyTimesObj)

              const allStudentsFilterd = allStudentsID.filter(function(e, i){
                return allStudentsID.indexOf(e) >= i;
            });
            studentResult = []
        console.log("allStudentsFilterd", allStudentsFilterd)
        console.log("HowManyTimesObj", HowManyTimesObj)
        allStudentsFilterd.forEach(student => {
            
            console.log(` teacher ${student} has ${HowManyTimesObj[student]} matches result witch is ${Math.floor((HowManyTimesObj[student])/(DemoUserSkillsArr.length)*100)}%`)
            let test = {
                studentID : student,
                skillsYouCanLearnHim: HowManyTimesObj[student]
            }
            studentResult.push(test)
            

            
        });
        res.json(studentResult)
        console.log(studentResult)
        //move "teacherResult" to the front
    })
})


module.exports = router;








