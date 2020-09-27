const connection = require('../configs/db')

const transactionOut = {
  getTransactionBySenderId: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM transactionout WHERE senderId = ? ORDER BY createdAt DESC', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getAllTransactionOut: () => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM transactionout`, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteTransactionOut: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM transactionout WHERE transactionId = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  insertTransactionOut: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO transactionout SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}

module.exports = transactionOut
