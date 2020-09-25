const pinModels = require('../models/pin')
const helper = require('../helpers/helpers')

const pin = {
  getPinByUserId: (req, res) => {
    const id = req.params.userId
    pinModels.getPinByUserId(id)
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
  insertPin: (req, res) => {
    const {
      pin,
      userId
    } = req.body
    const data = {
      pin,
      userId
    }
    pinModels.insertPin(data)
      .then((result) => {
        console.log(result)
        helper.res(res, result, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  updatePin: (req, res) => {
    const id = req.params.userId
    const {
      pin
    } = req.body
    const data = {
      pin
    }
    pinModels.updatePin(id, data)
      .then((result) => {
        console.log(result)
        helper.res(res, result, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  deletePin: (req, res) => {
    const id = req.params.userId
    pinModels.deletePin(id)
      .then((result) => {
        helper.res(res, result, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

module.exports = pin
