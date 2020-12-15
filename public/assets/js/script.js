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










})

    
