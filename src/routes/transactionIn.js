const express = require('express')
const transactionInController = require('../controllers/transactionIn')
const router = express.Router()
const { verifyAccess } = require('../middlewares/auth')

router
  .get('/:id', verifyAccess, transactionInController.getTransactionByReceiverId)
  .get('/', verifyAccess, transactionInController.getAllTransactionIn)
  .post('/', verifyAccess, transactionInController.insertTransactionIn)
  .delete('/:id', verifyAccess, transactionInController.deleteTransactionIn)

module.exports = router
