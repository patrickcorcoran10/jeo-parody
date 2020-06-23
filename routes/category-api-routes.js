const db = require("../models");
module.exports = function (app) {
  app.get("/api/getCategories-sj", (req, res) => {
    db.Categories.findAll({
      where: {
        singleJeopardy: true,
      },
    }).then((dbData) => {
      res.json(dbData);
    });
  });
};
