const transactionModels = require('../models/transaction')
const helper = require('../helpers/helpers')

const transaction = {
  getTransactionInByUserId: (req, res) => {
    const id = req.params.id
    transactionModels.getTransactionInByUserId(id)
      .then((result) => {
        if (result.length > 0) {
          helper.res(res, result, 200, null)
        } else {
          helper.res(res, [], 200, null)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  },
  getTransactionOutByUserId: (req, res) => {
    const id = req.params.id
    transactionModels.getTransactionOutByUserId(id)
      .then((result) => {
        if (result.length > 0) {
          helper.res(res, result, 200, null)
        } else {
          helper.res(res, [], 200, null)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  },
  getAllTransaction: (req, res) => {
    transactionModels.getAllTransaction()
      .then((result) => {
        if (result.length > 0) {
          helper.res(res, result, 200, null)
        } else {
          helper.res(res, [], 200, null)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  },
  getTransactionThisWeek: (req, res) => {
    const id = req.params.id
    transactionModels.getTransactionThisWeek(id)
      .then((result) => {
        if (result.length > 0) {
          helper.res(res, result, 200, null)
        } else {
          helper.res(res, [], 200, null)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  },
  getIncomeThisWeek: (req, res) => {
    const id = req.params.id
    transactionModels.getIncomeThisWeek(id)
      .then((result) => {
        if (result.length > 0) {
          helper.res(res, result, 200, null)
        } else {
          helper.res(res, [], 200, null)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  },
  getExpenseThisWeek: (req, res) => {
    const id = req.params.id
    transactionModels.getExpenseThisWeek(id)
      .then((result) => {
        if (result.length > 0) {
          helper.res(res, result, 200, null)
        } else {
          helper.res(res, [], 200, null)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  },
  insertTransaction: (req, res) => {
    const {
      userId,
      senderId,
      senderName,
      receiverId,
      receiverName,
      amount,
      statusId,
      notes
    } = req.body
    const data = {
      userId,
      senderId,
      senderName,
      receiverId,
      receiverName,
      amount,
      statusId,
      createdAt: new Date(),
      notes
    }
    transactionModels.insertTransaction(data)
      .then((result) => {
        console.log(result)
        helper.res(res, result, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  deleteTransaction: (req, res) => {
    const id = req.params.id
    transactionModels.deleteTransaction(id)
      .then((result) => {
        helper.res(res, result, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

module.exports = transaction
