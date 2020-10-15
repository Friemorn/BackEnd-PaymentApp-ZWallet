const express = require('express')
const transactionController = require('../controllers/transaction')
const router = express.Router()
const { verifyAccess } = require('../middlewares/auth')

router
  .get('/in/:id', verifyAccess, transactionController.getTransactionInByUserId)
  .get('/out/:id', verifyAccess, transactionController.getTransactionOutByUserId)
  .get('/', verifyAccess, transactionController.getAllTransaction)
  .get('/week/:id', verifyAccess, transactionController.getTransactionThisWeek)
  .get('/income/:id', verifyAccess, transactionController.getIncomeThisWeek)
  .get('/expense/:id', verifyAccess, transactionController.getExpenseThisWeek)
  .post('/', verifyAccess, transactionController.insertTransaction)
  .delete('/:id', verifyAccess, transactionController.deleteTransaction)

module.exports = router
