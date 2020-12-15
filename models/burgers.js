var orm = require("../config/orm.js");


var burgers = {
    all: function(table,cb){
        orm.selectAll(table,function(dbData){
            console.log("Data at the model level when you run the get request: ")
            console.log(dbData)
            cb(dbData)
        })
    },
    create: function(table,values,cb){
        orm.insertOne(table,values,function(dbData){
            console.log("Data at the model level when you run the post request: ")
            console.log(dbData)
            console.log(table)
            cb(dbData);
        })
    },
    update: function(devoured,id,cb){
        orm.updateOne(devoured,id,function(dbData){
            console.log("Data at the model level when you run the put request: ")
            console.log(dbData)
            cb(dbData)
        })
    },
    delete: function(){

    }

};


module.exports = burgers;
