module.exports = function (sequelize, DataTypes) {
    const Studentpost = sequelize.define('Studentpost', {
        level: {
            type: DataTypes.STRING
        },
        post: {
            type: DataTypes.TEXT,
            validate: {
                len: [1] // we should set maximun characters, not sure that 100 like here
            }

        },

        connect: {
            type: DataTypes.TEXT,
            //WILL GET FROM USER ID

        }


    });
    Studentpost.associate = function (models) {
        //Studentpost.belongsTo(models.User);
    };
    return Studentpost;
};