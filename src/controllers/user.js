const bcrypt = require('bcryptjs')
const helper = require('../helpers/helpers')
const userModels = require('../models/user')
const jwt = require('jsonwebtoken')
const fs = require('fs')

module.exports = {
  register: async (req, res) => {
    const { username, email, password } = req.body
    const isUsername = await userModels.getUserByUsername(username)
    const isUser = await userModels.getUserbyEmail(email)
    if (isUsername.length !== 0) return helper.res(res, { message: 'Username is Already Exist' }, 403, null)
    if (isUser.length !== 0) return helper.res(res, { message: 'Email is Already Registered' }, 403, null)
    const data = {
      username,
      firstName: 'First Name',
      lastName: 'LastName',
      email,
      password,
      image: 'https://github.com/Friemorn/BackEnd-PaymentApp-ZWallet/blob/master/www.freepik.comfree-iconmale-user-shadow_751026.htm%23page=1&query=user&position=2.png?raw=true',
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
      lastName
    } = req.body
    const data = {
      username,
      firstName,
      lastName
    }
    if (req.file) {
      userModels.getUserById(id).then(result => {
        const user = result[0]
        const img = user.image.replace(`${process.env.BASE_URL}/uploads/`, '')
        const filePath = `./uploads/${img}`;
        fs.unlinkSync(filePath)
      })
      data.image = `${process.env.BASE_URL}/uploads/${req.file.filename}`
    }
    userModels.updateUser(id, data)
      .then((result) => {
        console.log(result)
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
      const img = user.image.replace(`${process.env.BASE_URL}/uploads/`, '')
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
  getUserByUsername: (req, res) => {
    const username = req.params.username
    userModels.getUserByUsername(username)
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
    const search = req.query.search
    const limit = parseInt(req.query.limit)
    const page = parseInt(req.query.page)
    const offset = (page - 1) * limit
    const end = page * limit

    let countData
    let countSearch
    let next
    let previous
    let resultPage
    let endPage
    let endPageSearch

    userModels.getCount().then(result => {
      countData = result[0].count
      endPage = Math.ceil(countData / limit)
    })
    userModels.getSearchCount(search).then(result => {
      countSearch = result[0].searchCount
      endPageSearch = Math.ceil(countSearch / limit)
    })

    if (search) {
      userModels.searchUser(search, limit, offset)
        .then((result) => {
          if (end < countSearch) {
            next = {
              'nextPage': page + 1,
              'nextUrl': `${process.env.BASE_URL}/user?search=${search}&page=${page + 1}&limit=${limit}`
            }
          }

          if (offset > 0) {
            previous = {
              'previousPage': page - 1,
              'previousUrl': `${process.env.BASE_URL}/user?search=${search}&page=${page - 1}&limit=${limit}`
            }
          }

          resultPage = {
            'currentPage': page,
            'perPage': limit,
            'totalData': countSearch,
            ...next,
            ...previous,
            'firstPage': 1,
            'lastPage': endPageSearch
          }

          if (result.length > 0) {
            helper.response(res, resultPage, result, 200, null)
          } else {
            helper.response(res, resultPage, [], 200, null)
          }
        })
        .catch((err) => {
          console.log(err)
        })
      } else {
      userModels.getAllUser(limit, offset)
        .then((result) => {
          if (end < countData) {
            next = {
              'nextPage': page + 1,
              'nextUrl': `${process.env.BASE_URL}/user?page=${page + 1}&limit=${limit}`
            }
          }

          if (offset > 0) {
            previous = {
              'previousPage': page - 1,
              'previousUrl': `${process.env.BASE_URL}/user?page=${page - 1}&limit=${limit}`
            }
          }

          resultPage = {
            'currentPage': page,
            'perPage': limit,
            'totalData': countData,
            ...next,
            ...previous,
            'firstPage': 1,
            'lastPage': endPage
          }

          if (result.length > 0) {
            helper.response(res, resultPage, result, 200, null)
          } else {
            helper.response(res, resultPage, [], 200, null)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  updatePassword: async (req, res) => {
    const id = req.params.id
    const {
      password
    } = req.body
    const data = {
      password
    }
    userModels.getUserById(id)
      .then((result) => {
        const user = result[0]
        const hash = user.password
    bcrypt.compare(password, hash).then((resCompare) => {
      if (resCompare) return helper.res(res, { message: "Don't Use Old Password" }, 403, null)
      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(data.password, salt, function (err, hash) {
          data.password = hash
          userModels.updateUser(id, data)
            .then((result) => {
              helper.res(res, result, 201, null)
            })
            .catch((err) => {
              console.log(err)
            })
          })
        })
      })
      .catch((err) => {
      console.log(err)
      })
    })
  }
}
