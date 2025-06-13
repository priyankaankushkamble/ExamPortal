let app=require("./src/app.js");
require("dotenv").config();

const PORT = process.env.PORT ;
app.listen(process.env.PORT,()=>{
    console.log("sever started"+PORT);
});