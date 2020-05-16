

module.exports = function (sequelize, DataTypes) {
    const Skill2 = sequelize.define('programming_languager_small', {
      
        skill: DataTypes.STRING,
        
        //teacher id by: Skill.belongsTo(models.Teacher);
    });
    Skill2.associate = function (models) {
       // Skill.belongsTo(models.Teacher);
    };
    return Skill2;
};

