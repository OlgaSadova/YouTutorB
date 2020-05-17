

module.exports = function (sequelize, DataTypes) {
    const StudentSkill = sequelize.define('StudentSkill', {
        skill: DataTypes.STRING,
        //studentlevel: DataTypes.INTEGER, // 1-5   
        
    });
    StudentSkill.associate = function (models) {
        StudentSkill.belongsTo(models.User);
    };
    return StudentSkill;
};

