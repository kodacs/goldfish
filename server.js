'use strict'

const express    = require('express')
const mongoose   = require('mongoose')
const bodyParser = require('body-parser')
const logger     = require('morgan')
const crypto     = require('crypto')
const jwt        = require('jsonwebtoken')

var app = express()

//database
mongoose.connect(process.env.npm_package_config_database)

//middlewares
app.use(express.static('dist'))
app.use(bodyParser.urlencoded({ extended:false}))
app.use(bodyParser.json())
app.use(logger(':remote-addr - :remote-user [Odate[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'))
app.set('signing', process.env.npm_package_confi_secretkey)

//API: models, routes
//var userModel = require('./api/models/user-model.js')
//var auth = require('./api/routes/auth.js')
//var user = require('./api/routes/user.js')
//app.use('/api/auth', auth)
//app.use('/api/user', user)

//
app.get('/api', function (req, res) {
  res.send('API Ahead! For detailed documentation, please consult the developer.');
});

app.listen(process.env.npm_package_config_port);
console.log('Magic happens at http://localhost:' + process.env.npm_package_config_port)
