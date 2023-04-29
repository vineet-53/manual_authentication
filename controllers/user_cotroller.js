const Users = require("../models/users");
const userSignIn = (req, res) => {
  return res.render("users/signIn");
};
const userSignUp = (req, res) => {
  return res.render("users/signUp");
};
const userCreate = (req, res) => {
  const { password, confirm_password: confirmPassword } = req.body;
  if (password != confirmPassword) {
    return res.redirect("back");
  }
  Users.findOne({ email: req.body.email }).then(user => {
    if (!user) {
      Users.create(req.body).then(e => {
        console.log(e, "created user on database");
      });
      return res.redirect("/users/sign-in");
    }
    return res.render("users/userExisted", {
      message: "user existed. ",
      link: "/users/sign-in",
      link_name: "Sign In",
    });
  });
};
const userLoginSession = (req, res) => {
  const { email: userEmail, password: userPassword } = req.body;
  Users.findOne({ email: userEmail }).then(user => {
    if (!user) return res.redirect("/users/sign-up");
    else {
      if (userPassword != user.password) {
        console.log("something is wrong");
        return res.redirect("back");
      }
      console.log("user_auth is done and proved ");
      const user_id = user._id;
      res.cookie("user_auth", user_id);
      return res.redirect("/users/profile");
    }
  });
};
const userProfile = (req, res) => {
  return res.render("users/details/profile");
};
module.exports = {
  userSignIn,
  userSignUp,
  userCreate,
  userLoginSession,
  userProfile,
};
