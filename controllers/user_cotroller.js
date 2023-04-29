const userSignIn= (req, res) => {
  return res.render("users/signIn");
};
const userSignUp= (req, res) => {
  return res.render("users/signUp");
};

module.exports = {
     userSignIn,
     userSignUp
}