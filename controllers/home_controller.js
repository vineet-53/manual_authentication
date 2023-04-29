const Users = require("../models/users");
const isUserLoggedIn = (req, res) => {
  const { user_auth: user_id } = req.cookies;
  console.log(user_id);
  Users.findById(user_id).then(user => {
    if (!user) {
      return res.redirect("/users/sign-in");
    }
    console.log("user Found loggin user in ");
    return res.redirect('/users/profile');
  });
};
module.exports = {
  isUserLoggedIn,
};
