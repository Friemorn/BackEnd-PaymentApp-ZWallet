const express = require('express')
const phoneController = require('../controllers/phone')
const router = express.Router()
const { verifyAccess } = require('../middlewares/auth')

router
  .get('/:userId', verifyAccess, phoneController.getPhoneByUserId)
  .post('/', verifyAccess, phoneController.insertPhone)
  .patch('/:phoneId', verifyAccess, phoneController.updatePhone)
  .delete('/:phoneId', verifyAccess, phoneController.deletePhone)

module.exports = router
