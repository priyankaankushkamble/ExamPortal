let express = require("express");
const bodyParser = require("body-parser");
require("../src/config/db.js");
let app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.set("view engine", 'ejs');
module.exports = app;