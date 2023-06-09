const express = require("express");
const router = express.Router();
const {
  userSignIn,
  userSignUp,
  userCreate,
  userLoginSession,
  userProfile,
  userSignOut,
} = require("../controllers/user_cotroller");
router.get("/sign-in", userSignIn);
router.get("/sign-up", userSignUp);
router.post("/create-user", userCreate);
router.post("/create-session", userLoginSession);
router.get("/profile", userProfile);
router.get("/sign-out", userSignOut);
module.exports = router;
