module.exports = function (sequelize, DataTypes) {
    const Studentpost = sequelize.define('Studentpost', {
        // level: {
        //     type: DataTypes.STRING
        // },
        about: {
            type: DataTypes.TEXT
            // validate: {
            //     len: [1] // we should set maximun characters, not sure that 100 like here
            // }

        }
       


    });
    Studentpost.associate = function (models) {
        Studentpost.belongsTo(models.User);
    };
    return Studentpost;
};