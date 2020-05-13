

<<<<<<< HEAD
module.exports = function(sequelize, DataTypes) {
    const Review = sequelize.define('review', {
=======
module.exports = function (sequelize, DataTypes) {
    const Review = sequelize.define('Review', {
>>>>>>> be1f1e50d05741cf502587135300013be571f5f2
        rating: { 
            type: DataTypes.STRING // (1-5)
        },
        review: {
            type: DataTypes.TEXT, 
            validate:{
                len: [80] // we should set maximun characters, not sure that 100 like here
            }
        }

    });
    Review.associate = function (models) {
       // Review.belongsTo(models.Teacher);
    };
    return Review;
};
