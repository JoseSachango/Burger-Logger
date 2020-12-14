var express = require("express");
const connection = require("../config/connection");
var burgers = require("../models/burgers");


var router = express.Router();



router.get("/index",function(request,response){
   
    
    response.render("index")

    
})



router.get("/",function(request,response){
   
  

  

    response.render("index")

    
})



router.get("/api/:burger",function(request,response){
   
    var burger = request.params.burger
    var condition = "WHERE burger_name="+`'${burger}'`

    burgers.all("burgers",condition,function(dbData){

       
        console.log("Data at the router level: ")

        console.log(dbData)

        console.log("This is the condition: ")
        console.log(condition)

        var object = {

            dbArray: dbData
        }

        console.log(object)

        response.render("index",object)
    })

 

    

    
})


module.exports = router;