const connection = require('../configs/db')

const transaction = {
  getTransactionById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM transaction WHERE transactionId = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getAllTransaction: () => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM transaction`, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteTransaction: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM transaction WHERE transactionId = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  insertTransaction: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO transaction SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}

module.exports = transaction
