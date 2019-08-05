const express = require('express')
const app = express()
const cors = require("cors")
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())

let tasks = []

app.get('/', (req,res) => {
    res.send("Welcome to the home page")
})

app.post('/todolist', (req,res) => {
    let taskTitle = req.body.taskTitle
    let taskPriority = req.body.taskPriority
    let task = {title: taskTitle, priority: taskPriority}
    tasks.push(task)
    console.log(taskTitle)
    console.log(taskPriority)
    res.send("New task saved")
})

app.get('/todolist', (req,res) => {
    res.json(tasks)
})

app.listen(3000, () => {
    console.log('Server is running...')
})