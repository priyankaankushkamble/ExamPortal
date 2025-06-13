
let express=require("express");
const bodyParser = require("body-parser");
let session=require("express-session");
let cookieparser=require("cookie-parser");
let conn=require("./config/db.js");

let app=express();
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieparser());
app.use(session({
secret:"examapplication-portal",
resave:false,
saveUninitialized:true
}));
module.exports=app;