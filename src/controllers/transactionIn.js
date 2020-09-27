const transactionInModels = require('../models/transactionIn')
const helper = require('../helpers/helpers')

const transactionIn = {
  getTransactionByReceiverId: (req, res) => {
    const id = req.params.id
    transactionInModels.getTransactionByReceiverId(id)
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
  getAllTransactionIn: (req, res) => {
    transactionInModels.getAllTransactionIn()
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
  insertTransactionIn: (req, res) => {
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
    transactionInModels.insertTransactionIn(data)
      .then((result) => {
        console.log(result)
        helper.res(res, result, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  deleteTransactionIn: (req, res) => {
    const id = req.params.id
    transactionInModels.deleteTransactionIn(id)
      .then((result) => {
        helper.res(res, result, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

module.exports = transactionIn
