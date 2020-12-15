var express = require("express");
const connection = require("../config/connection");
var burgers = require("../models/burgers");


var router = express.Router();



router.get("/",function(request,response){
   
    burgers.all("burgers",function(dbData){
        
        console.log("Data at the controller level: ")
        console.log(dbData)
        
        var object = {
            dbArray: dbData
        }

        response.render("index",object)
    })

    
});







router.post("/api/burgers",function(request,response){
    console.log(" The /api/burgers route hit")
    var burgerName = request.body.burgerName
    var devoured = 0
    
    var values =[burgerName]

    burgers.create("burgers",values,function(dbData){

       
        console.log("Data at the router level: ")

        console.log(dbData)

        console.log("These are the values: ")
        console.log(values)

        var object = {

            dbArray: dbData
        }

        console.log(object)

        //response.render("index",object)

        //response.redirect("/")
    })

 

    

    
})


module.exports = router;