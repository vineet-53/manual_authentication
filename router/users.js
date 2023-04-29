const express = require("express");
const router = express.Router();
router.use(express.urlencoded({ extended: true }));
const {
  userSignIn,
  userSignUp,
  userCreate,
} = require("../controllers/user_cotroller");
router.get("/sign-in", userSignIn);
router.get("/sign-up", userSignUp);
router.post("/create-user", userCreate);
module.exports = router;
