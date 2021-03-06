const express = require('express')
const userController = require('../controllers/user')
const router = express.Router()
const { verifyAccess } = require('../middlewares/auth')
const { upload } = require('../middlewares/multer')

router
  .get('/:id', verifyAccess, userController.getUserById)
  .get('/username/:username', userController.getUserByUsername)
  .get('/', verifyAccess, userController.getAllUser)
  .post('/register', userController.register)
  .post('/login', userController.login)
  .patch('/password/:id', verifyAccess, userController.updatePassword)
  .patch('/:id', verifyAccess, upload, userController.updateUser)
  .patch('/balance/:id', verifyAccess, userController.updateBalance)
  .delete('/:id', verifyAccess, userController.deleteUser)

module.exports = router
