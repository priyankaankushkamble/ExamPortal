let app=require("./src/app.js");
require("dotenv").config();
app.get("/",(req,res)=>{
    res.send("welcome to exam application syatem");
    res.end();
});
app.listen(process.env.Port,()=>{
    console.log("sever started");
});