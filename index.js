let app=require("./src/app.js");
require("dotenv").config();

const PORT = process.env.PORT || 4000;
app.listen(process.env.PORT,()=>{
    console.log("sever started"+PORT);
});