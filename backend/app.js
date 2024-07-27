const express = require('express');
const mongoose = require('mongoose')
const todoRouter = require('./routes/todoRoutes');
const errorHandler = require('./middleware/errorHandlerMiddleware');

const app = express()
const PORT = 8090;
const HOST = '192.168.0.10'
const DB_CONNECTION = "mongodb://127.0.0.1:27017/mern-todo"

//! Make connection to db
mongoose.connect(DB_CONNECTION)
.then(() => console.log('Connection to Database Established'))
.catch((error) => console.log(error))


//? Middleware
app.use(express.json())

app.use('/api/v1', todoRouter)


// app.get('/', function(req, res) {
//     console.log('request to route "/"')
//     res.send('How are you Emma')
// })

// app.get('/emma', function(req, res) {
//     console.log('request to route "/emma"')
//     res.send('Emmanuel Asante')
// })

// app.get('/seth', function(req, res) {
//     console.log(req.headers)
//     console.log('request to route "/seth"')
//     res.send('Seth Mensah')
// })

// app.post('/users', function(req, res) {
//     console.log('request to route "/users"')
//     res.json({
//         name: 'Emma',
//          age: 25
//         })
// })


// app.get('/asante', function(req, res) {
//     res.json({
//         name: "Daniel",
//         age: 33,
//         "body-count": 6,
//     })
// })


app.use(errorHandler)

app.listen(PORT, HOST, () => console.log(`Server Started on http://${HOST}:${PORT}`));