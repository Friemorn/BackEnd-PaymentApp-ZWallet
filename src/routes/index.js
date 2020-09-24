const express = require('express')
const userRoutes = require('./user')
const transactionRoutes = require('./transaction')
const router = express.Router()

router
  .use('/user', userRoutes)
  .use('/transaction', transactionRoutes)

module.exports = router
