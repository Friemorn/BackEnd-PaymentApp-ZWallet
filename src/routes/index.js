const express = require('express')
const userRoutes = require('./user')
const pinRoutes = require('./pin')
const transactionOutRoutes = require('./transactionOut')
const transactionInRoutes = require('./transactionIn')
const router = express.Router()

router
  .use('/user', userRoutes)
  .use('/pin', pinRoutes)
  .use('/transactionout', transactionOutRoutes)
  .use('/transactionin', transactionInRoutes)

module.exports = router
