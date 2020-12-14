const mysql = require("mysql");

const connection = mysql.createConnection({
    host:"ctgplw90pifdso61.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port:3306,
    user:"v6jdp9man6k8y82n",
    password: "qvnm0auoz5stod1r",
    database: "vw62dm2v8v9f89c5"

})


connection.connect(function(err){
    if(err) throw err;
})


module.exports = connection;
