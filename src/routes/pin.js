const express = require('express')
const pinController = require('../controllers/pin')
const router = express.Router()
const { verifyAccess } = require('../middlewares/auth')

router
  .get('/:userId', verifyAccess, pinController.getPinByUserId)
  .post('/', pinController.insertPin)
  .patch('/:userId', verifyAccess, pinController.updatePin)
  .delete('/:userId', verifyAccess, pinController.deletePin)

module.exports = router
