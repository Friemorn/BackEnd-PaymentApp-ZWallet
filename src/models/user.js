const connection = require('../configs/db')

const user = {
  register: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO user SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getUserbyEmail: (email) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM user WHERE email = ?', email, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getUserbyUsername: (username) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM user WHERE username = ?', username, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getUserById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT user.*, pin.pinId, pin.pin FROM user LEFT JOIN pin ON user.userId = pin.userId WHERE user.userId = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getAllUser: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM user', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateUser: (id, data) => {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE user SET ? WHERE userId = ?', [data, id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteUser: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM user WHERE userId = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}

module.exports = user
