const connection = require('../configs/db')

const pin = {
  getPinByUserId: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM pin WHERE userId = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  insertPin: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO pin SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updatePin: (id, data) => {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE pin SET ? WHERE userId = ?', [data, id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deletePin: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM pin WHERE userId = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
}

module.exports = pin
