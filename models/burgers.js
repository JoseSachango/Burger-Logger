var orm = require("../config/orm.js");


var burgers = {
    all: function(table,condition,cb){
        orm.selectAll(table,condition,function(dbData){
            console.log("Data at the model level: ")
            console.log(dbData)
            cb(dbData)
        })
    },
    create: function(){

    },
    update: function(){

    },
    delete: function(){

    }

};


module.exports = burgers;
