const express = require('express')
const userRoutes = require('./user')
const pinRoutes = require('./pin')
const transactionRoutes = require('./transaction')
const router = express.Router()

router
  .use('/user', userRoutes)
  .use('/pin', pinRoutes)
  .use('/transaction', transactionRoutes)

module.exports = router
