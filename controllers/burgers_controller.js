var express = require("express");
const connection = require("../config/connection");
var burgers = require("../models/burgers");


var router = express.Router();



router.get("/",function(request,response){
   
    burgers.all("burgers",function(dbData){
        
        console.log("Data at the controller level when you run the get request: ")
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
    
    var values =[burgerName,devoured]

    burgers.create("burgers",values,function(dbData){

       
        console.log("Data at the router level when you run the post request: ")

        console.log(dbData)

        console.log("These are the values when you run the post request: ")
        console.log(values)


    

        

       // response.redirect("/")
       response.end()
    })

 

    

    
})





router.put("/api/burgers/:id",function(request,response){

    var id = request.body.burgerId
    var devoured = request.body.devouredStatus

    console.log("You hit the put router: ")
    console.log(devoured)
    console.log(id)

    burgers.update(devoured,id,function(dbData){

        console.log("Data at the controller level when you run the put request: ")
        console.log(dbData)

        //response.status(200).redirect("/")

        if (dbData.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return response.status(404).end();
          } else {
            response.status(200).end();
          }
    })



    

})


module.exports = router;