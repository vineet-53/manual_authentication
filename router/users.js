const express = require("express");
const router = express.Router();
const { userSignIn, userSignUp } = require("../controllers/user_cotroller");
router.get("/sign-in", userSignIn);
router.get("/sign-up", userSignUp);
module.exports = router;