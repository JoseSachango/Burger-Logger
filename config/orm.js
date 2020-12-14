const connection = require("./connection.js");


var orm  = {
    selectAll: function(table,condition,cb){

        
        connection.query("SELECT * FROM ?? "+ condition,[table],function(err,dbData){

            if(err) throw err

            console.log("This is the table: ")
            console.log(table)

            console.log("Data at the ORM level: ")
            console.log(dbData)
            cb(dbData);
        })

        /*
        connection.query("SELECT * FROM burgers WHERE burger_name='Cheese'",function(err,dbData){

            if(err) throw err

            console.log("This is the table: ")
            console.log(table)

            console.log("Data at the ORM level: ")
            console.log(dbData)

            cb(dbData)
        })*/
    },


    insertOne: function(){

    },
    updateOne: function(){

    }
}


module.exports = orm;