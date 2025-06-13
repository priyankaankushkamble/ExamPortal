let conn = require("../config/db/js"); {
    exports.saveUser = (...regData) => {
        conn.query("insert into nureg values('0',?,?,?,?,?)", [...regData]);

        return true;
    }
}