const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser')
const db = require('monk')(process.env.mongoconnstring)
const listCollection = db.get('list')

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    next()
})

app.use(bodyParser.json())

app.get('/list', async (req, res) => {
    const items = await listCollection.find({})
    res.send(items)
})

app.post('/list', async (req, res) => {
    const newItem = req.body
    const savedItem = await listCollection.insert(newItem)
    res.send(savedItem)
    console.log("hit the post")
})

app.delete('/list', async (req, res) => {
    const deleteItem = req.body.id
    console.log("delted item", deleteItem)
    const beGone = await listCollection.remove(deleteItem)
    res.send(deleteItem)

})

app.put('/list', async (req, res) => {
    const updateItem = req.body
    console.log(updateItem)
    const editThis = await listCollection.update({_id: updateItem._id}, updateItem)
    res.send(updateItem)
})

app.listen('3001', () => {
    console.log("we are live")
})