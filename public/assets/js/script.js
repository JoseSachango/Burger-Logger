//const burgers = require("../../models/burgers")



$(function(){

    console.log("Document Ready")

    $("#form").on("submit",function(event){
    
        event.preventDefault()

        console.log("Form submitted")
    
        var burger = $("#formInput").val().trim()
    
        console.log(burger)
    
    
        $.ajax(`/api/${burger}`,{
            type:"GET"
        }).then((renderedWebpage)=>{
    
            //console.log(renderedWebpage)
            
        })
    
    
    
    })










})

    
