const db = require("../models");
const express = require("express");
const router = express.Router();
//student looking for teacher
router.post("/api/matchteacherskills", (req, res) => {
    const teacherResults = []
    const allTeachersID = []
    const skillsLookingFor = req.body.skills.split(",")
    // console.log("OOOOOOOOOOOOOOOOOO", typeof(skillsLookingFor))
    db.TeacherSkill.findAll(
        {
            attributes: ["skill", "UserId", "updatedAt"],
            where: {
                skill: skillsLookingFor
            },
            include: [db.User]
        }
    )
        .then(skillsArr => {
            //skillsArr.dataValues
            console.log("skillsArr^%$^%$^%$^%$^%$^$%^%$^%$^%$^%$^%$^%$^%$^", skillsArr)
            skillsArr.map(skill => {
                allTeachersID.push(skill.dataValues.UserId)
            })
            const HowManyTimesObj = allTeachersID.reduce(function (obj, b) {
                obj[b] = ++obj[b] || 1;
                return obj;
            }, {});
            const allTeacherFilterd = allTeachersID.filter(function (e, i) {
                return allTeachersID.indexOf(e) >= i;
            });
            skillsArr.forEach(result => teacherResults.push(result.dataValues))
            //console.log("HowManyTimesObjFFFFFFFFFFFFFFFFFFF%#$%#$%#$%$#",HowManyTimesObj)
            //console.log("HowManyTimesObjFFFFFFFFFFFFFFFFFFF%#$%#$%#$%$#",allTeacherFilterd)
            //teacherResults.push
            // allTeacherFilterd.forEach(teacher => {
            //     console.log(` teacher ${teacher} has ${HowManyTimesObj[teacher]} matches result witch is ${(HowManyTimesObj[teacher]) / (skillsLookingFor.length) * 100}%`)
            // });
            
            const test = []
            allTeacherFilterd.forEach(element => {
                test.push({
                    teacherIdAAAA: element,
                    studentResults1: teacherResults,
                    percentage: (HowManyTimesObj[element]) / (skillsLookingFor.length) * 100
                })
            });


            return res.json(test)
        })
})
//teacher looking for student
router.post("/api/matchstudentskills", (req, res) => {
    const studentResults = []
    const allStudentsID = []
    const skillsLookingFor = req.body.skills.split(",")
    console.log("OOOOOOOOOOOOOOOOOO" ,typeof(skillsLookingFor))
    //console.log(req.body.skills, req.body)
    //console.log(typeof(skillsLookingFor))
    db.StudentSkill.findAll(
        {
            attributes: ["skill", "UserId", "updatedAt"],
            where: {
                skill: skillsLookingFor
            },
            include: [db.User]
        }
    )
        .then(skillsArr => {
            //skillsArr.dataValues
            console.log("skillsArr^%$^%$^%$^%$^%$^$%^%$^%$^%$^%$^%$^%$^%$^", skillsArr)
            skillsArr.map(skill => {
                allStudentsID.push(skill.dataValues.UserId)
            })
            const HowManyTimesObj = allStudentsID.reduce(function (obj, b) {
                obj[b] = ++obj[b] || 1;
                return obj;
            }, {});
            // console.log(HowManyTimesObj);
            
            const allStudentFilterd = allStudentsID.filter(function (e, i) {
                return allStudentsID.indexOf(e) >= i;
            });
            skillsArr.forEach(result => studentResults.push(result.dataValues))
            // allStudentFilterd.forEach(teacher => {
            //     console.log(` teacher ${teacher} has ${HowManyTimesObj[teacher]} matches result witch is ${(HowManyTimesObj[teacher]) / (skillsLookingFor.length) * 100}%`)
            // })
            const test = [] 
            allStudentFilterd.forEach(element => {
                test.push({
                    teacherIdAAAA: element,
                    studentResults1: studentResults,
                    percentage: (HowManyTimesObj[element]) / (skillsLookingFor.length) * 100
                })
            });
            // console.log("test"+ test.percentage)
            // console.log("studentResults"+ test.studentResults1)
            // console.log("HowManyTimesObj$$$$$$$$$$$$$$$############", HowManyTimesObj)
            // console.log((HowManyTimesObj)/(skillsLookingFor.length)*100)
            // console.log(studentResults)
            return res.json(test)
        })
})


module.exports = router;


