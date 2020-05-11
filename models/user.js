
const bcrypt = require("bcrypt");

module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define('User', {
        first_name: {
            type: DataTypes.STRING,
        },
        last_name :{
            type: DataTypes.STRING,
        },
        email :{
            type: DataTypes.STRING,
            isEmail: true
        },
        password :{
            type: DataTypes.STRING,
            validate:{
                len: [6] //We can change
            }
        }
    });
    User.associate = function(models) {
    User.hasMany(models.Teacher);
    User.hasMany(models.Studentpost);
    }
    User.beforeCreate(function(user){
    user.password = bcrypt.hashSync(user.password,bcrypt.genSaltSync(10),null);
    })
    return User;
};