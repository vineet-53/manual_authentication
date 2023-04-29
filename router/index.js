const express = require("express");
const router = express.Router();
const { isUserLoggedIn } = require("../controllers/home_controller");

router.use(express.urlencoded({ extended: true }));
router.use("/users", require("./users"));
router.get("/", isUserLoggedIn);
module.exports = router;
