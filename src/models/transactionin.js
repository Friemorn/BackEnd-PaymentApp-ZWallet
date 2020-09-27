const connection = require('../configs/db')

const transactionIn = {
  getTransactionByReceiverId: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM transactionin WHERE receiverId = ? ORDER BY createdAt DESC', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getAllTransactionIn: () => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM transactionin`, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteTransactionIn: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM transactionin WHERE transactionId = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  insertTransactionIn: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO transactionin SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}

module.exports = transactionIn
