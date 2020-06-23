module.exports = function (sequelize, DataTypes) {
  const Category = sequelize.define("Categories", {
    categoryName: {
      type: DataTypes.STRING,
    },
    singleJeopardy: {
      type: DataTypes.BOOLEAN,
    },
    doubleJeopardy: {
      type: DataTypes.BOOLEAN,
    },
    questionA: {
      type: DataTypes.STRING,
    },
    answerA: {
      type: DataTypes.STRING,
    },
    questionB: {
      type: DataTypes.STRING,
    },
    answerB: {
      type: DataTypes.STRING,
    },
    questionC: {
      type: DataTypes.STRING,
    },
    answerC: {
      type: DataTypes.STRING,
    },
    questionD: {
      type: DataTypes.STRING,
    },
    answerD: {
      type: DataTypes.STRING,
    },
    questionE: {
      type: DataTypes.STRING,
    },
    answerE: {
      type: DataTypes.STRING,
    },
  });
  return Category;
};
