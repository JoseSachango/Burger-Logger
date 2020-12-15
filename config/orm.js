const connection = require("./connection.js");


var orm  = {
    selectAll: function(table,cb){

        
        connection.query("SELECT * FROM ?? ",[table],function(err,dbData){

            if(err) throw err

            console.log("This is the table: ")
            console.log(table)

            console.log("Data at the ORM level: ")
            console.log(dbData)
            cb(dbData);
        })

    
    },


    insertOne: function(table,values,cb){
        connection.query("INSERT INTO ?? (burger_name) VALUES (?)",[table,values],function(err,dbData){

            console.log("dbData at the ORM level: ")
            console.log(dbData)

            if(err) throw err

            cb(dbData)
        }

        )

    },

    updateOne: function(){

    }
}


module.exports = orm;