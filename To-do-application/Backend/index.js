const express= require("express");
const {createTodo}=require(" ./types");
const { todo } = require("./db");
const app= express();

app.use(express.json());

app.post('todo',(req,res)=>{
    const payLoad=req.body;
    const parsedPayLoad= createTodo.safeParse(createPayLoad);
    if(!parsedPayLoad.success){
        res.status(411).json({
            msg: "You gave wrong inputs!"
        })
        return;
    }
    
    //put it in mongodb database if everything's fine
    todo.create({
        title: createPayLoad.title,
        description: createPayLoad.description,
    })
    res.json({
        msg: "Todo created"
    })
})

app.get('todos',(req,res)=>{
    
})

app.put('completed',(req,res)=>{
    const updatePayLoad=req.body;
    const parsedPayLoad=updateTodo.safeParse(updatePayLoad);
    if(!parsedPayLoad.success){
        res.status(411).json({
            msg:"You've sent the wrong inputs!"
        })
    }
})
