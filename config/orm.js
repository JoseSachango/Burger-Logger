const connection = require("./connection.js");


var orm  = {
    selectAll: function(table,cb){

        
        connection.query("SELECT * FROM ?? ",[table],function(err,dbData){

            if(err) throw err

            console.log("This is the table: ")
            console.log(table)

            console.log("Data at the ORM level when you run the get request: ")
            console.log(dbData)
            cb(dbData);
        })

    
    },


    insertOne: function(table,values,cb){
        connection.query("INSERT INTO ?? (burger_name, devoured) VALUES (?)",[table,values],function(err,dbData){

            console.log("dbData at the ORM level when you run the post request: ")
            console.log(dbData)

            if(err) throw err

            cb(dbData)
        }

        )

    },

    updateOne: function(devoured,id,cb){

        console.log()
        connection.query("UPDATE burgers SET devoured=? WHERE id=?",[devoured,id],function(err,dbData){
            if(err) throw err
            console.log("Data at the ORM level when you run the put request: ")
            console.log(dbData)
            cb(dbData)
        })
    },

    
}


module.exports = orm;