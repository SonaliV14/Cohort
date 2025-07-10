const express = require("express");

const app = express();

app.get("/health-checkup",function(req,res, next){
    console.log("hello from req1");
    next();
},function(req,res){
    console.log("hello from req2");
});

app.listen(4000);