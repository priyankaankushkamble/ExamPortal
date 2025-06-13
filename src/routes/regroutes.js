/*let routes = require("express");
let regCtrl = require("../controller/regCtrl.js");
let router = routes.router();
router.get("/homepage", regCtrl.regCtrl);
module.exports = router; */

let regCtrl = require("../controller/regCtrl");
let router = routes.Router();
router.post("/register", regCtrl.regCtrl);

router.get("/", regCtrl.homePage);
router.get("/signup", regCtrl.signUpPage);
router.get("/signin", regCtrl.signInPage)
router.post("/validate", regCtrl.validateUser);
router.get("/viewprofile", regCtrl.viewProfile);
router.post("/update", regCtrl.updateProfile);
module.exports = router;