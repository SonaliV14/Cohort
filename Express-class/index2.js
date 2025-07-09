const express=require("express");
const app=express();
var users=[{
    name:"john",
    kidneys:[{
        healthy:"true"
    },{
        noOfKidneys:2
    }]
}];

app.use(express.json());

app.get("/",function(req,res){
    const johnKidneys=users[0].kidneys;
    const noOfKidneys=johnKidneys.length;
    let noOfHealthyKidneys=0;
    for(let i=0;i<johnKidneys.length;i++){
        if(johnKidneys[i].healthy){
            noOfHealthyKidneys+=1;
        }
    }
    const noOfUnhealthyKidneys=noOfKidneys - noOfHealthyKidneys;
    res.json({
        johnKidneys,
        noOfHealthyKidneys,
        noOfUnhealthyKidneys
    })
})

app.post("/",function(req,res){
    const isHealthy=req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg:"Done!"
    })
})
app.put("/",function(req,res){
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;
    }
})

//removing all the unhealthy kidneys

app.delete("/",function(req,res){
    if(atleastOneUnhealthyKidney()){
const newKidneys=[];
    for(let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy:true
            })
        }
    }
    users[0].kidneys=newKidneys;
    res.json({
        msg:"done"
    })
    }else{
        res.sendStatus(411).json({
            msg:"You've send a wong request !"
        })
    }
    
})

function atleastOneUnhealthyKidney(){
    let atleastOneUnhealthyKidney=false;
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney=true;
        }
    }
    return atleastOneUnhealthyKidney;
}

app.listen(3001);