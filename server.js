const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Bear = require('./models/bear')
const router = require('./routes')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const port = process.env.PORT || 8080

mongoose.connect('mongodb://tim:454706@ds023064.mlab.com:23064/moviekeep')

app.use('/api', router)

app.listen(port)
console.log('Magic happens on port ' + port)

exports.db = mongoose