const express = require('express')
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')

const app = express();

app.get('/', (req, res))

app.listen('3001', () => {
    console.log("we are live")
})