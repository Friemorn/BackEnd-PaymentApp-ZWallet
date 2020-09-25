const express = require('express')
const transactionController = require('../controllers/transaction')
const router = express.Router()

router
  .get('/:id', transactionController.getTransactionBySenderId)
  .get('/', transactionController.getAllTransaction)
  .post('/', transactionController.insertTransaction)
  .delete('/:id', transactionController.deleteTransaction)

module.exports = router
