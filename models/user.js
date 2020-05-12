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
            isEmail: true
        },
        password: {
            type: DataTypes.STRING,
            validate: {
                len: [6] //We can change
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
        User.hasMany(models.Teacher);
        User.hasMany(models.Studentpost);

    }
    User.beforeCreate(function (user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    })
    return User;
};