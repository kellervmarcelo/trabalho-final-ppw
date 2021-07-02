const express = require("express")
const route = express.Router()
const anime = require('./anime')
const autor = require('./autor')

route.use('/anime', anime)
route.use('/autor', autor)

module.exports = route

