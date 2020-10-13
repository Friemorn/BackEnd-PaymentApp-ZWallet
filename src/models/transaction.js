const connection = require('../configs/db')

const transaction = {
  getTransactionByUserId: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM transaction WHERE userId = ?`, id, (err, result) => {
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
  getTransactionThisWeek: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT DAYNAME(createdAt) AS days, SUM(amount) AS amount FROM transaction WHERE userId = ? AND createdAt >= CURRENT_DATE - INTERVAL 7 DAY GROUP BY days`, id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getIncomeThisWeek: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT SUM(amount) AS income FROM transaction WHERE receiverId = ? AND createdAt >= CURRENT_DATE - INTERVAL 7 DAY`, id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getExpenseThisWeek: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT SUM(amount) AS expense FROM transaction WHERE senderId = ? AND createdAt >= CURRENT_DATE - INTERVAL 7 DAY`, id, (err, result) => {
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
