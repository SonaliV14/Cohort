const express = require("express");

const app = express();

let numberOfRequests=0;
function countRequests(req, res, next){
    numberOfRequests++;
    console.log(numberOfRequests);
    next();
}

app.use(countRequests);
//app.use(express.json());

app.post("/calculate",countRequests,function(req,res){
    res.json({
        msg:"hello"
    });
});

app.listen(3000);
