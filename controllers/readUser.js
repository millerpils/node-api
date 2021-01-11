const User = require("../models/user");

module.exports = (req, res) => {
  User.find(
    {
      username: req.body.username,
    },
    (error, user) => {
      if (error) {
        console.log(error);
      } else {
        res.send(user);
      }
    }
  );
};
