const User = require("../models/user");

module.exports = async (req, res) => {
  await User.find({}, (error, users) => {
    if (error) {
      console.log(error);
    } else {
      res.send(users);
    }
  });
};
