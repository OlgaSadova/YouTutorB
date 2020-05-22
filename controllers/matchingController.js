


const db = require("../models");
const express = require("express");
const router = express.Router();


//student looking for teacher
router.post("/api/matchteacherskills", (req, res) => {
    let teacherResults = []
    const allTeachersID = []
    const skillsLookingFor = req.body.skills.split(",")
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

            const test = []
            allTeacherFilterd.forEach(element => {
                teacherResults = []                
                skillsArr.forEach(result => {
                    if(element===result.dataValues.UserId)teacherResults.push(result.dataValues)
                })
                test.push({
                    teacherID: element,
                    teacherResults: teacherResults,
                    percentage: (HowManyTimesObj[element]) / (skillsLookingFor.length) * 100
                })
            });


            return res.json(test)
        })
})



//teacher looking for student
router.post("/api/matchstudentskills", (req, res) => {
    let studentResults = []
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
          
            const test = []
            allStudentFilterd.forEach(element => {
                studentResults = []
                console.log(element)
                skillsArr.forEach(result => {
                    if(element===result.dataValues.UserId)studentResults.push(result.dataValues)
                })
                test.push({
                    studentID: element,
                    studentResults: studentResults,
                    percentage: (HowManyTimesObj[element]) / (skillsLookingFor.length) * 100
                })
            });
            return res.json(test)
            



        })
})


module.exports = router;




