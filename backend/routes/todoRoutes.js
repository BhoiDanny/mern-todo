const express = require("express");
const { todoController } = require("../controllers/todoController");


const todoRouter = express.Router();

todoRouter.get('/todos', function(req, res) {
    res.json([
        {
            id: 1,
            title: 'Learn Node.js',
            completed: false
        },
        {
            id: 2,
            title: 'Learn React',
            completed: false
        },
        {
            id: 3,
            title: 'Learn Vue',
            completed: false
        }
    ])
})

todoRouter.get('/singleTodo', function(req, res) {
    res.json({
        id: 1,
        title: 'Learn Node.js',
        completed: false,
    })
})

todoRouter.get(
    '/todo',
    todoController.getAllTodos
)

todoRouter.post(
    '/todo',
    todoController.createTodo
)

module.exports = todoRouter;