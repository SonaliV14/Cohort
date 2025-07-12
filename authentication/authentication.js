const express= require("express");
const jwt= require("jsonwebtoken");
const jwtpassword="123456";

const app=express();
app.use(express.json());
const ALL_USERS =[
    {
        username:"john@gmail.com",
        password:"123",
        name:"john"
    },{
        username:"annie@gmail.com",
        password:"567",
        name:"annie"
    },
    {
        username:"tom@gmail.com",
        password:"123456",
        name:"tom"
    }
]

function userExists(username, password){
    const userExist=false;
    for(let i=0;i<ALL_USERS.length;i++){
        if(ALL_USERS[i].username==username && ALL_USERS[i].password==password){
            userExist=true;
        }
    }
    return userExist;
}

app.post("/signin",function(req,res){
    const username=req.body.username;
    const password=req.body.password;

    if(!userExists(username, password)){
        res.status(403).json({
            msg: "Invalid user"
        })
    }
    
    var token = jwt.sign({ username:username}, jwtPassword);
    return res.json({
        token
    });
});

app.get("/users", function(req, res){
    const token = req.headers.authorisation;
    const decoded= jwt.verify(token, authorisation);
    const username = decoded.username;

    res.json({
        users: ALL_USERS.filter(function(value){
            if(value.username==username){
                return false
            }else{
                return true
            }
        })
    });
});

app.listen(3000);
