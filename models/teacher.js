module.exports = function (sequelize, DataTypes) {
    const Teacher = sequelize.define('Teacher', {

        skills: {
            type: DataTypes.STRING
        },
        levels: {
            type: DataTypes.STRING
        },

        about :{
            type: DataTypes.TEXT, 
            validate:{
                len: [1] // we should set maximun characters, not sure that 100 like here
            }
        },
        dob: {
            type: DataTypes.DATEONLY, //format('YYYY-MM-DD')
        },
        picture: {
            type: DataTypes.STRING, // link?
        }


    });
    Teacher.associate = function (models) {
        Teacher.belongsTo(models.User)

        Teacher.hasMany(models.Review);

        // Teacher.hasMany(models.Review);


    };
    return Teacher;
};