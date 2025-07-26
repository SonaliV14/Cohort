const zod = require("zod");

const createTodo=zod.object({
    title: zod.string,
    desciption: zod.string,
    completed: zod.boolean
})

const updateTodo = zod.object({
    id: zod.string,
})

module.exports={
    createTodo, updateTodo
}