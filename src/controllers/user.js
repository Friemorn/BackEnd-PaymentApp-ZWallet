const bcrypt = require('bcryptjs')
const helper = require('../helpers/helpers')
const userModels = require('../models/user')
const jwt = require('jsonwebtoken')

module.exports = {
  register: async (req, res) => {
    const { username, email, password } = req.body
    const isUsername = await userModels.getUserbyUsername(username)
    const isUser = await userModels.getUserbyEmail(email)
    if (isUsername.length !== 0) return helper.res(res, { message: 'Username is Already Exist' }, 403, null)
    if (isUser.length !== 0) return helper.res(res, { message: 'Email is Already Registered' }, 403, null)
    const data = {
      username,
      firstName: 'John',
      lastName: 'Smith',
      email,
      password,
      pin: 123456,
      phone: '0123456789',
      image: 'https://www.iconfinder.com/data/icons/ionicons/512/icon-ios7-contact-512.png',
      balance: 0,
      createdAt: new Date()
    }
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(data.password, salt, function (err, hash) {
        data.password = hash
        userModels.register(data)
          .then((result) => {
            helper.res(res, result, 201, null)
          })
          .catch((err) => {
            console.log(err)
          })
      })
    })
  },
  login: (req, res) => {
    const { email, password } = req.body
    userModels.getUserbyEmail(email)
      .then((result) => {
        if (result.length < 1) return helper.res(res, { message: 'Email Not Found!' }, 403, null)

        const user = result[0]
        const hash = user.password
        console.log(password)
        console.log(hash)
        bcrypt.compare(password, hash).then((resCompare) => {
          if (!resCompare) return helper.res(res, { message: 'Password is Wrong!' }, 403, null)
          const payload = {
            userId: user.userId,
            email: user.email,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName
          }
          jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '12h' }, (err, token) => {
            user.token = token
            delete user.password
            delete user.pin
            delete user.phone
            delete user.image
            delete user.balance
            delete user.createdAt
            helper.res(res, user, 200)
          })
        })
      })
      .catch((err) => {
        console.log(err)
      })
  },
  updateUser: (req, res) => {
    const id = req.params.id
    const {
      username,
      firstName,
      lastName,
      email,
      password,
      pin,
      phone,
      balance
    } = req.body
    const data = {
      username,
      firstName,
      lastName,
      email,
      password,
      pin,
      phone,
      balance
    }
    if (req.file) {
      userModels.getUserById(id).then(result => {
        const user = result[0]
        const img = user.image.replace('http://localhost:4000/api/v1/uploads/', '')
        const filePath = `./uploads/${img}`;
        fs.unlinkSync(filePath)
      })
      data.image = `http://localhost:4000/api/v1/uploads/${req.file.filename}`
    }
    userModels.updateUser(id, data)
    .then((result) => {
      helper.res(res, result, 200, null)
    })
    .catch((err) => {
      console.log(err)
    })
  },
  deleteUser: (req, res) => {
    const id = req.params.id
    userModels.getUserById(id).then(result => {
      const user = result[0]
      const img = user.image.replace('http://localhost:4000/api/v1/uploads/', '')
      const filePath = `./uploads/${img}`
      fs.unlinkSync(filePath)
    })
    userModels.deleteUser(id)
    .then((result) => {
      helper.res(res, result, 200, null)
    })
    .catch((err) => {
      console.log(err)
    })
  },
  getUserById: (req, res) => {
    const id = req.params.id
    userModels.getUserById(id)
      .then((result) => {
        if (result.length > 0) {
          helper.res(res, result, 200, null)
        } else {
          helper.res(res, [], 404, null)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  },
  getAllUser: (req, res) => {
    userModels.getAllUser()
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
}
