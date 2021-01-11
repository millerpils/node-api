const User = require("../models/user");

module.exports = async (req, res) => {
  console.log(req.body);

  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });

  user
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};
