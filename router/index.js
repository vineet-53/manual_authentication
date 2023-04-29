const express = require("express");
const { home } = require("../controllers/home_controller");
const router = express.Router();
router.get("/", home);
router.use("/users",  require("./users"));
module.exports = router;
