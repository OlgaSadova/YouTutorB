

module.exports = function (sequelize, DataTypes) {
    console.log(DataTypes);
    
    const TeacherSkill = sequelize.define('TeacherSkill', {
        skill: DataTypes.STRING
       // teachlevel: DataTypes.INTEGER, // 1-5   
        
    });
    TeacherSkill.associate = function (models) {
        TeacherSkill.belongsTo(models.User);
    };
    return TeacherSkill;
};

