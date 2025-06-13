let express=require("express");
let adminCtrl= require("../controller/adminCtrl");
let router=express.Router();

router.get("/",adminCtrl.adminCtrl);


module.exports=router;
