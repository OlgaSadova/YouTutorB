

module.exports = function (sequelize, DataTypes) {
    const Studentpost = sequelize.define('studentpost', {
        level: { 
            type: DataTypes.STRING
        },
        post: {
            type: DataTypes.TEXT, 
            validate:{
                len: [100] // we should set maximun characters, not sure that 100 like here
            }
        },
        // connect: {
        //     //WILL GET FROM USER ID
        // }

    });
    Studentpost.associate = function (models) {
        Studentpost.belongsTo(models.User);
    };
    return Studentpost;
};




