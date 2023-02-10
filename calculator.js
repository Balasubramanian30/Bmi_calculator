const express = require('express');
const body = require('body-parser');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.listen("3000",function(){
    console.log("server started...");
});
app.post("/", function(req,res){
    var num1 = Number(req.body.N1);
    var num2 = Number(req.body.N2);
    var result = num1 + num2 ;
    res.send("The result is " + result );
});
app.get("/", function(req,res){                                                                                                                                                                                                                                                                                                            
   res.sendFile(__dirname + "/index.html");
});
app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname + "/BMI.html");
});
app.post("/bmicalculator",function(req,res){
    var num1 = Number(req.body.weight);
    var num2 = Number(req.body.height);
    var result = num1 / (num2 * num2) ;
    res.send("Your Bmi is " + result);
});