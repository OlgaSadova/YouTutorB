

module.exports = function (sequelize, DataTypes) {
    const Skill = sequelize.define('skill', {
        skill: DataTypes.STRING,
        teachlevel: DataTypes.INTEGER, // 1-5   
        
    });
    Skill.associate = function (models) {
        Skill.belongsTo(models.Teacher);
    };
    return Studentpost;
};

