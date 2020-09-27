const express = require('express')
const transactionOutController = require('../controllers/transactionOut')
const router = express.Router()
const { verifyAccess } = require('../middlewares/auth')

router
  .get('/:id', verifyAccess, transactionOutController.getTransactionBySenderId)
  .get('/', verifyAccess, transactionOutController.getAllTransactionOut)
  .post('/', verifyAccess, transactionOutController.insertTransactionOut)
  .delete('/:id', verifyAccess, transactionOutController.deleteTransactionOut)

module.exports = router
