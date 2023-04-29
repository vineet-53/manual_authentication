const userSignIn = (req, res) => {
  return res.render("users/signIn");
};
const userSignUp = (req, res) => {
  return res.render("users/signUp");
};
const userCreate = (req, res) => {
  const { password, confirm_password: confirmPassword } = req.body;
  if (password !== confirmPassword) return res.redirect("back");
  console.log("userCreated");
  return res.redirect("back");
};

module.exports = {
  userSignIn,
  userSignUp,
  userCreate,
};
