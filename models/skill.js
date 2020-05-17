

module.exports = function (sequelize, DataTypes) {
    const Skill = sequelize.define('Skill', {
        skill: DataTypes.STRING
        // teachlevel: DataTypes.INTEGER, // 1-5
        //teacher id by: Skill.belongsTo(models.Teacher);
    });
    // Skill.associate = function (models) {
    //    Skill.belongsTo(models.Teacher);
    // };
    return Skill;
};

