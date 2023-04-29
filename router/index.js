const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
     res.send("c");
});
router.use("/users",  require("./users"));
module.exports = router;
