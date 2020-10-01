const phoneModels = require('../models/phone')
const helper = require('../helpers/helpers')

const phone = {
  getPhoneByUserId: (req, res) => {
    const id = req.params.userId
    phoneModels.getPhoneByUserId(id)
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
  insertPhone: (req, res) => {
    const {
      phoneNumber,
      userId
    } = req.body
    const data = {
      phoneNumber,
      userId
    }
    phoneModels.insertPhone(data)
      .then((result) => {
        console.log(result)
        helper.res(res, result, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  updatePhone: (req, res) => {
    const id = req.params.phoneId
    const {
      phoneNumber
    } = req.body
    const data = {
      phoneNumber
    }
    phoneModels.updatePhone(id, data)
      .then((result) => {
        console.log(result)
        helper.res(res, result, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  deletePhone: (req, res) => {
    const id = req.params.phoneId
    phoneModels.deletePhone(id)
      .then((result) => {
        helper.res(res, result, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

module.exports = phone
