const transactionOutModels = require('../models/transactionOut')
const helper = require('../helpers/helpers')

const transactionOut = {
  getTransactionBySenderId: (req, res) => {
    const id = req.params.id
    transactionOutModels.getTransactionBySenderId(id)
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
  getAllTransactionOut: (req, res) => {
    transactionOutModels.getAllTransactionOut()
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
  insertTransactionOut: (req, res) => {
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
    transactionOutModels.insertTransactionOut(data)
      .then((result) => {
        console.log(result)
        helper.res(res, result, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  deleteTransactionOut: (req, res) => {
    const id = req.params.id
    transactionOutModels.deleteTransactionOut(id)
      .then((result) => {
        helper.res(res, result, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

module.exports = transactionOut
