

module.exports = function (sequelize, DataTypes) {
    const AllSkill = sequelize.define('AllSkill', {
        skill: DataTypes.STRING,  
        
    });
   
    return AllSkill;
};

