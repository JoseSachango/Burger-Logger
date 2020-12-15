//const burgers = require("../../models/burgers")



$(function(){

    console.log("Document Ready")

    $("#form").on("submit",function(event){
    
        event.preventDefault()

        console.log("Form submitted")
    
        var burger = $("#formInput").val().trim()

        var burgerObject = {
            burgerName: burger
        }
    
        console.log(burger)
    
    
        $.ajax(`/api/burgers`,{
            type:"POST",
            data: burgerObject
        }).then((renderedWebpage)=>{
    
            console.log(renderedWebpage)
            location.reload()
            
        })
    
    
    
    })


    $(".dlt-btn").on("click",function(event){
        console.log("The eat button has been clicked")
        
        var id = $(this).data("eat")

        console.log("This is the id for the eat button: ")
        console.log(id)

        var newDevoured = 1;

        var object = {
            burgerId: id,
            devouredStatus: newDevoured 
        }

        $.ajax("/api/burgers/"+id,{
            type: "PUT",
            data: object
        }).then((result)=>{

            console.log("The results from the put request are below: ")
            console.log(result)

            location.reload()
        })

    })










})

    
