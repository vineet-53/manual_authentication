
if(process.env.NODE_ENV != "production")
require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.DB || DB).then(e => {
  console.log("db: connected  ");
});
module.exports = mongoose;