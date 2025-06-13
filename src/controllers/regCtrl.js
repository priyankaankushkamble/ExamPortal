const { name } = require("ejs");
let regService = require("../services/regservice.js");
let regmodel = requier("../models/regmodels.js");

exports.regCtrl = (req, res) => {
    let {
        name,
        email,
        contact,
        username,
        password
    } = req.body;
    let result = regService.acceptRegData(name, email, contact, username, password)
    res.render("register", { msg: result });
}
exports.homepage = (req, res) => {
    res.render("home.ejs")
}