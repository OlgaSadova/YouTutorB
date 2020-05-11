
module.exports = function(sequelize, DataTypes) {
    const Teacher = sequelize.define('Teacher', {
        skills :{
            type: DataTypes.ARRAY(DataTypes.STRING), // [JS, javaScript, HTML5, HTML , Java, C++, React, Go, jQuery, SQL]
        },
        levels :{
            type: DataTypes.ARRAY(DataTypes.STRING), //[]
        },
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
        Teacher.belongsTo(models.User)
        Teacher.hasMany(models.Review);
    };
    return Teacher;
};

