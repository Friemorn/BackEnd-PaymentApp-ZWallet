const connection = require('../configs/db')

const phone = {
  getPhoneByUserId: (userId) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM phone WHERE userId = ?', userId, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  insertPhone: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO phone SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updatePhone: (phoneId, data) => {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE phone SET ? WHERE phoneId = ?', [data, phoneId], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deletePhone: (phoneId) => {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM phone WHERE phoneId = ?', phoneId, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}

module.exports = phone
