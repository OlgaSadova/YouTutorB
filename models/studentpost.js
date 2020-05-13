

module.exports = function (sequelize, DataTypes) {
    const Studentpost = sequelize.define('Studentpost', {
        level: { 
            type: DataTypes.STRING
        },
        post: {
            type: DataTypes.TEXT, 
            validate:{
                len: [100] // we should set maximun characters, not sure that 100 like here
            }
<<<<<<< HEAD
        },
        connect: {
            type: DataTypes.TEXT, 
            //WILL GET FROM USER ID
=======
>>>>>>> be1f1e50d05741cf502587135300013be571f5f2
        }
        // connect: {
        //     //WILL GET FROM USER ID
        // }

    });
    Studentpost.associate = function (models) {
       // Studentpost.belongsTo(models.User);
    };
    return Studentpost;
};




