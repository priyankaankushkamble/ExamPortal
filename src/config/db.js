let mysql=require("mysql2");
const dotenv=require("dotenv");
dotenv.config();
const conn=mysql.createConnection({
    host:process.env.DB_HOST||'localhost',
    user:process.env.DB_USER||'root',
    password:process.env.DB_PASSWORD||'root',
    database:process.env.DB_DATABASE||'examapplication'
});
conn.connect((err)=>{
    if(err){
        console.log("Database is not connected",err.message);

    }
    else{
            console.log("database is connected");
            
    }
});
module.exports=conn;