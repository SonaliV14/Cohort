const express=require("express");
const jwt= require("jsonwebtoken");
const mongoose= require("mongoose");
const jwtPassword="123456";

const res= await fetch("");
const json = await res.json({

})

mongoose.connect(
    "mongodb://127.0.0.1:27017/myDatabase",
);

const User = mongoose.model("User",{
    name: String,
    username: String,
    password: String
});

app.post("signup", async function(req, res){
    const name=req.body.name;
    const username= req.body.username;
    const password= req.body.password;

    const existingUser = await User.findOne({ email: username});
    if(existingUser){
        return res.status(400).send("Username already exists !");
    }
});

const user= new User({
    name: name,
    username: username,
    password: password
});

user.save()
.then(() => console.log("User details saved successfully!"))
.catch((err) => console.log("Error saving user:", err));

res.json({
    msg: "User created successfully!"
})

const app= express();
app.use(express.json());

app.listen(3000);


