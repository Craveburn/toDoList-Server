const express = require('express')
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())

const inMemoryDatabase = {
    users: [

    ]
}

app.get('/list', (req, res) => {
    res.send(inMemoryDatabase.users)
})

app.post('/list', (req, res) => {
    const newItem = req.body
    inMemoryDatabase.users.push(newItem)
    res.send('Added new item: ' + newItem)
})

app.listen('3001', () => {
    console.log("we are live")
})