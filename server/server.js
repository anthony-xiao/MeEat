const path = require('path')
const express = require('express')
const homeRoutes = require('./routes/homeRoute')
const bodyParser = require('body-parser')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(bodyParser.urlencoded({extended: true}))

server.use('/', homeRoutes)

module.exports = server
