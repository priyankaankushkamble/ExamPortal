let express=require("express");
let adminCtrl= require("../controller/adminCtrl");
let router=express.Router();

router.get("/",adminCtrl.adminCtrl);
console.log(adminCtrl);
module.exports=router;
