const express = require('express')
const { register, login, getAllUser, updateUser, getUser, idSearchUser } = require('../controller/userCntrl')
const { isAuthentication } = require('../middleware/authentic')
const router = express.Router()

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/alluser').post(getAllUser)
router.route('/update').put(updateUser)
router.route('/myDp').get(isAuthentication,getUser)
router.route('/id').get(idSearchUser)

module.exports = router