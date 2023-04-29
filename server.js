require("./config/mogoose");
const express = require("express");
const expressEjsLayouts = require("express-ejs-layouts");
const router = require("./router/index");
const Users = require("./models/users");
const cookieParser = require("cookie-parser");
const app = express();
// use
app.use(express.static("public"));
app.use(expressEjsLayouts);
app.use(cookieParser());
// set
app.set("view engine", "ejs");
app.set("views", "./views");
app.set("layout", "layouts/layout");
app.use("/", router);
// server
app.listen(process.env.PORT || 8000, () => {
  console.log("started");
  // Users.deleteMany({}).then(e =>{console.log("deleted")})
});
