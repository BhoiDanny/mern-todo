const asyncHandler = require('express-async-handler')
const Todo = require('../models/Todo')

const todoController = {
    //? Get all todo
    getAllTodos: asyncHandler(async (req, res) => {
        const todos = await Todo.find({})

        res.json(todos)
    }),
    createTodo: asyncHandler(async (req, res) => {
        const { title, description } =  req.body

        if (!title) {
            throw new Error('Title is required')
        }

        const todo = await Todo.create({ title, description })

        res.status(201).json(todo)
    })
}

module.exports = {todoController};