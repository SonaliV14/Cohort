const express=require("express");
const app=express();

app.use(express.json());

app.post("/health-checkup",function(req,res,next){
    const kidneys= req.body.kidneys;
    const kidneyLength= kidneys.length;

    res.send("you have "+kidneyLength+" kidneys")
})

let errorCount=0;
errorCount++;
app.use(function(err,req,res,next){
    res.json({
        msg:"Sorry something went wrong!"
    })
    console.log("error shown");
})

app.listen(3000);
