var orm = require("../config/orm.js");


var burgers = {
    all: function(table,cb){
        orm.selectAll(table,function(dbData){
            console.log("Data at the model level: ")
            console.log(dbData)
            cb(dbData)
        })
    },
    create: function(table,values,cb){
        orm.insertOne(table,values,function(dbData){
            console.log(table)
            cb(dbData);
        })
    },
    update: function(){

    },
    delete: function(){

    }

};


module.exports = burgers;
