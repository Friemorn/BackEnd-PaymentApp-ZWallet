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
  getUserByUsername: (username) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM user WHERE username = '${username}'`, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getUserById: (userId) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT user.*, pin.pinId, pin.pin FROM user LEFT JOIN pin ON user.userId = pin.userId WHERE user.userId = ?', userId, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getAllUser: (limit, offset) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT user.*, pin.pinId, pin.pin FROM user LEFT JOIN pin ON user.userId = pin.userId ORDER BY username LIMIT ${limit} OFFSET ${offset}`, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  searchUser: (username, limit, offset) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT user.*, pin.pinId, pin.pin FROM user LEFT JOIN pin ON user.userId = pin.userId WHERE user.username LIKE ? LIMIT ${limit} OFFSET ${offset}`, `%${username}%`, (err, result) => {
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
  deleteUser: (userId) => {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM user WHERE userId = ?', userId, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getSearchCount: (username) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT COUNT(*) AS searchCount FROM user WHERE username LIKE ?', `%${username}%`, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getCount: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT COUNT(*) AS count FROM user', (err, result) => {
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
