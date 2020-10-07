const express = require('express')
const userRoutes = require('./user')
const pinRoutes = require('./pin')
const phoneRoutes = require('./phone')
const transactionRoutes = require('./transaction')
const emailRoutes = require('./email')
const router = express.Router()

router
  .use('/user', userRoutes)
  .use('/pin', pinRoutes)
  .use('/phone', phoneRoutes)
  .use('/transaction', transactionRoutes)
  .use('/email', emailRoutes)
  
module.exports = router
