const bcrypt = require("bcrypt");

module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('User', {
        first_name: {
            type: DataTypes.STRING,
            allowNull:false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull:false
        },
        email: {
            type: DataTypes.STRING,
            isEmail: true,
            unique: true,
            allowNull:false
        },
        password: {
            type: DataTypes.STRING,
            validate: {
                len: [8] //We can change
            }
        },
        zipcode: {
            type: DataTypes.INTEGER,
            validate: {
                len: [5, 5]
            }


        }
    });
    User.associate = function (models) {
      User.hasOne(models.Teacher);
      User.hasOne(models.Studentpost);
    //   User.hasMany(models.TeacherSkill);


    }
    User.beforeCreate(function (user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    })
    return User;
};




