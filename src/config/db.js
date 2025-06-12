let mysql = require("mysql2");

let conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "examapplication"
});
conn.connect((err) => {
    if (err) {
        console.log("Database is not connected", err.message);
    } else {
        console.log("Database is connected");

    }

});