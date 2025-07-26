const mongoose = require("mongoose");
const { boolean } = require("zod");
//mongodb+srv://sonalivarshney1404:wOuoehtYjEWGIj4K@todo.jjdtjdf.mongodb.net/
mongoose.connect("mongodb+srv://sonalivarshney1404:wOuoehtYjEWGIj4K@todo.jjdtjdf.mongodb.net/");

const todoSchema=({
    title: String,
    description: String, 
    completed: Boolean
});

const todo= mongoose.model('todos',todoSchema);

module.exports={
    todo
};