let routes = require("express");
let regCtrl = require("../controller/regCtrl");
let router = routes.router();
router.get("/homepage", regCtrl.regCtrl);
module.exports = router;