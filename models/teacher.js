
module.exports = function(sequelize, DataTypes) {
    const Teacher = sequelize.define('Teacher', {
        about :{
            type: DataTypes.TEXT, 
            validate:{
                len: [100] // we should set maximun characters, not sure that 100 like here
            }
        },
        dob :{
            type: DataTypes.DATEONLY, //format('YYYY-MM-DD')
        },
        picture :{
            type: DataTypes.STRING, // link?
        },

    });
    Teacher.associate = function(models) {
       // Teacher.belongsTo(models.User)
       // Teacher.hasMany(models.Review);

    };
    return Teacher;
};

