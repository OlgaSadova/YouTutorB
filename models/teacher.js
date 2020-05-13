module.exports = function (sequelize, DataTypes) {
    const Teacher = sequelize.define('Teacher', {

        about :{
            type: DataTypes.TEXT, 
            validate:{


                len: [100] // we should set maximun characters, not sure that 100 like here
            }
        },
        dob: {
            type: DataTypes.DATEONLY, //format('YYYY-MM-DD')
        },
        picture: {
            type: DataTypes.STRING, // link?
        },


    });
<<<<<<< HEAD
    Teacher.associate = function(models) {
       // Teacher.belongsTo(models.User)
       // Teacher.hasMany(models.Review);
=======
    Teacher.associate = function (models) {
        Teacher.belongsTo(models.User)
        Teacher.hasMany(models.Review);
>>>>>>> be1f1e50d05741cf502587135300013be571f5f2

    };
    return Teacher;
};