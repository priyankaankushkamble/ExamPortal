let express = require("express");
const bodyparser = require("body-parser");
let router = require("../src/routes/regroutes.js");

let conn = require("./config/db.js");
let app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.use("/", router);
app.use("/register", router);
app.set('view engine', 'ejs');
app.use(express.static("public"));
rt
module.exports = app;