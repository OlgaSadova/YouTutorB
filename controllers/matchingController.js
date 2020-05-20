const db = require("../models");
const express = require("express");
const router = express.Router();

//student looking for teacher
router.post("/api/matchteacherskills", (req, res) => {
    const teacherResults = []
    const allTeachersID = []
    const skillsLookingFor= ["HTML"] //JSON.parse(req.body.skills)
    //console.log(req.body.skills, req.body)
    //console.log(typeof(skillsLookingFor))


    db.TeacherSkill.findAll( 
        {attributes: ["skill", "UserId", "updatedAt"],
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
            const HowManyTimesObj = allTeachersID.reduce(function(obj, b) {
                obj[b] = ++obj[b] || 1;
                return obj;
              }, {});
              const allTeacherFilterd = allTeachersID.filter(function(e, i){
                return allTeachersID.indexOf(e) >= i;
            });
            skillsArr.forEach(result =>
                console.log(result.dataValues))
               // teacherResults.push(result.dataValues))
            //console.log(skillsArr[0].User.dataValues)
            //teacherResults.push

        })
        console.log(teacherResults.skill.TeacherSkill)
        return res.json(teacherResults.skill.TeacherSkill)
          
    })

//teacher looking for student
router.post("/api/matchstudentskills", (req, res) => {
    const studentResults = []
    const allStudentsID = []
    const skillsLookingFor= JSON.parse(req.body.skills)
    db.StudentSkill.findAll(
        {attributes: ["skill", "UserId", "updatedAt"],
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
            const HowManyTimesObj = allStudentsID.reduce(function(obj, b) {
                obj[b] = ++obj[b] || 1;
                return obj;
              }, {});
              const allStudentsFilterd = allStudentsID.filter(function(e, i){
                return allStudentsID.indexOf(e) >= i;
            });






        db.User.findAll(
            {attributes: ["id", "first_name", "last_name", "email", "picture"],
            where: {
                id: allStudentsFilterd
            }}
            ).then(users => {
                console.log(users)
                users.forEach(user => {
                    allStudentsFilterd.forEach(student => {
                    //console.log(` teacher ${student} has ${HowManyTimesObj[student]} matches result witch is ${Math.floor((HowManyTimesObj[student])/(skillsLookingFor.length)*100)}%`)
                    let studentObj = {
                        studentUserID : student,
                        first_name: user.dataValues.first_name,
                        last_name: user.dataValues.last_name,
                        email: user.dataValues.email,
                        picture: user.dataValues.picture,
                        skillsYouCanLearnHim: HowManyTimesObj[student]
                        //lastSkillUpdate: then we can sort by update 
                    }
                    console.log(studentObj)
                    for(let i = 0; i < studentResults.length; i++) {
                        if(studentResults.studentUserID === studentObj.studentUserID){
                            return
                        }
                       
                    }
                    studentResults.push(studentObj)

                 
                    
                 
                    });
                })     
                return res.json(studentResults)
            })
            
        })
})


module.exports = router;








