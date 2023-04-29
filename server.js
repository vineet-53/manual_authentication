require("./config/mogoose");
const express = require("express");
const router = require("./router/index");
const expressEjsLayouts = require("express-ejs-layouts");
const app = express();
// use
app.use(express.static("public"));
app.use(expressEjsLayouts);
// set
app.set("view engine", "ejs");
app.set("views", "./views");
app.set("layout", "layouts/layout");
app.use("/", router);
// server
app.listen(process.env.PORT || 8000, () => {
  console.log("started");
});
