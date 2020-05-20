// const db = require("../models");
// const express = require("express");
// const router = express.Router();


// //const DemoUserSkillsArr = ["SQL", "HTML", "JavaScript"] // the real data will come from req.data

// router.post("/api/matchskills", (req, res) => {
//     const allTeachersID = []
//      //console.log("##########################", req.body)
//     const DemoUserSkillsArr= req.body
//     db.TeacherSkill.findAll(
//         {attributes: ["skill", "UserId"],
//         //include: [{model: models.Product, attributes:[]}],
//         where: {
//             skill: DemoUserSkillsArr //req.body.data
//         }}
//         )
//         .then(skillsArr => {
//             //console.log(skillsArr)
//             skillsArr.map(skill => {
//                 allTeachersID.push(skill.dataValues.UserId)
//             })
//             //arr.reduce(callback( accumulator, currentValue[, index[, array]] )[, initialValue])
//             const HowManyTimesObj = allTeachersID.reduce(function(obj, b) {
//                 obj[b] = ++obj[b] || 1;
//                 return obj;
//               }, {});

//               const allTeacherFilterd = allTeachersID.filter(function(e, i){
//                 return allTeachersID.indexOf(e) >= i;
//             });
//             teacherResult = []
//         //console.log("allTeacherFilterd", allTeacherFilterd)
//         //console.log("HowManyTimesObj", HowManyTimesObj)
//         allTeacherFilterd.forEach(teacher => {
            
//             //console.log(` teacher ${teacher} has ${HowManyTimesObj[teacher]} matches result witch is ${Math.floor((HowManyTimesObj[teacher])/(DemoUserSkillsArr.length)*100)}%`)
//             let test = {
//                 teacherID : teacher,
//                 percentageForYourSkills: Math.floor((HowManyTimesObj[teacher])/(DemoUserSkillsArr.length)*100)
//             }
//             teacherResult.push(test)
            

            
//         });
//         res.json(teacherResult)
//         console.log(teacherResult)
//         //move "teacherResult" to the front
//     })
// })










const db = require("../models");
const express = require("express");
const router = express.Router();
//student looking for teacher
router.post("/api/matchteacherskills", (req, res) => {
    const teacherResults = []
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
            //skillsArr.dataValues
            //console.log("skillsArr^%$^%$^%$^%$^%$^$%^%$^%$^%$^%$^%$^%$^%$^", skillsArr)
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
            allTeacherFilterd.forEach(teacher => {
                console.log(` teacher ${teacher} has ${HowManyTimesObj[teacher]} matches result witch is ${(HowManyTimesObj[teacher]) / (skillsLookingFor.length) * 100}%`)
            })
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
    console.log(skillsLookingFor)
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
            const test = allStudentFilterd.forEach(element => {
                test.push({
                    teacherIdAAAA: element,
                    studentResults1: studentResults
                })
            });
            console.log("test", test)
            // console.log("HowManyTimesObj$$$$$$$$$$$$$$$############", HowManyTimesObj)
            // console.log((HowManyTimesObj)/(skillsLookingFor.length)*100)
            // console.log(studentResults)
            return res.json(test)
        })
})


module.exports = router;


