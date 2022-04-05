const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+ "/date.js");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine","ejs");

var item1=[];
var workItems=[];

app.get("/",function(req,res){
    
    let day = date(); 
   	res.render("list",{ListTitle:day, newListItems:item1});

});

app.post("/",function(req,res){
    
    let newItem =req.body.item;

    if(req.body.list == "Work")
    {
        if(req.body.item === ""){     
             res.redirect("/work");
        }else{
            workItems.push(req.body.item); 
            res.redirect("/work");
        }
    }else{
        if(req.body.item === ""){
             res.redirect("/");
        }else{
            item1.push(req.body.item); 
            res.redirect("/");
        }
    }
});

 app.get("/work",function(req,res){
       res.render("list",{ListTitle:"Work List", newListItems:workItems});
 });


app.get("/about",function(req,res){
      res.render("about");
    });
app.listen(3000);