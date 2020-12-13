const mysql = require("mysql");

const connection = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password: "7%#ll3R#R@nF#90^T&!e",
    database: "burgers_db"

})


connection.connect(function(err){
    if(err) throw err;
})


module.exports = connection;
