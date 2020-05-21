


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
            allTeacherFilterd.forEach(teacher => {
                console.log(` teacher ${teacher} has ${HowManyTimesObj[teacher]} matches result witch is ${(HowManyTimesObj[teacher]) / (skillsLookingFor.length) * 100}%`)
            });
            const test = []
            allTeacherFilterd.forEach(element => {
                test.push({
                    teacherID: element,
                    studentResults: teacherResults,
                    percentage: (HowManyTimesObj[element]) / (skillsLookingFor.length) * 100
                })
            });
            console.log("^%$^%$^%$^$%^%$^$%^%$^$%^%$^$%^%$^%$^^$%^%$^%$", test)

            return res.json(test)
        })
})
//teacher looking for student
router.post("/api/matchstudentskills", (req, res) => {
    const studentResults = []
    const allStudentsID = []
    const skillsLookingFor = req.body.skills.split(",")
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
            //console.log("skillsArr^%$^%$^%$^%$^%$^$%^%$^%$^%$^%$^%$^%$^%$^", skillsArr)
            skillsArr.map(skill => {
                allStudentsID.push(skill.dataValues.UserId)
            })
            const HowManyTimesObj = allStudentsID.reduce(function (obj, b) {
                obj[b] = ++obj[b] || 1;
                return obj;
            }, {});
            const allStudentFilterd = allStudentsID.filter(function (e, i) {
                return allStudentsID.indexOf(e) >= i;
            });
            skillsArr.forEach(result => studentResults.push(result.dataValues))
            allStudentFilterd.forEach(teacher => {
                console.log(` teacher ${teacher} has ${HowManyTimesObj[teacher]} matches result witch is ${(HowManyTimesObj[teacher]) / (skillsLookingFor.length) * 100}%`)
                
                
            })
            const test = []
            allStudentFilterd.forEach(element => {
                test.push({
                    studentID: element,
                    studentResults: studentResults,
                    percentage: (HowManyTimesObj[element]) / (skillsLookingFor.length) * 100
                })
            });
            console.log("^%$^%$^%$^$%^%$^$%^%$^$%^%$^$%^%$^%$^^$%^%$^%$", test)
            return res.json(test)
            



        })
})


module.exports = router;




