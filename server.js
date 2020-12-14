const express = require("express");


const app = express();


const PORT = process.env.PORT || 3011;


// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/",require("./controllers/burgers_controller"))








app.listen(PORT,function(){


    console.log("Server up and running on at the following location-> http://localhost:"+PORT)
})
