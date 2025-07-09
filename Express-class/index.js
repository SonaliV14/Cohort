const express = require("express");

const app=express();

function sum(n){
    let ans=0;
    for(let i =0;i<n;i++){
        ans+=i;
    }
    return ans;
}

app.get("/",function(req, res){
    const n= req.query.n;
    const ans=sum(n);
    res.send("Hi there, the ans is"+ans);
})



app.listen(3000, function() {
    console.log("Server is running on port 3000");
});