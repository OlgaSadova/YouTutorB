

module.exports = function (sequelize, DataTypes) {
    const Review = sequelize.define('Review', {
        rating: { 
            type: DataTypes.STRING // (1-5)
        },
        review: {
            type: DataTypes.TEXT, 
            validate:{
                len: [1,100] // we should set maximun characters, not sure that 100 like here
            }
        }

    });
    Review.associate = function (models) {
      Review.belongsTo(models.Teacher);
    };
    return Review;
};
