const transactionModels = require('../models/transaction')
const helper = require('../helpers/helpers')

const transaction = {
  getTransactionByUserId: (req, res) => {
    const id = req.params.id
    transactionModels.getTransactionByUserId(id)
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
  insertTransaction: (req, res) => {
    const {
      senderId,
      receiverId,
      amount,
      notes
    } = req.body
    const data = {
      senderId,
      receiverId,
      amount,
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
