const express = require('express')
const router = express.Router()

const authCtrl = require('../controllers/authController')

router.post('/register', authCtrl.register)
router.post('/login', authCtrl.login)
router.get('/testroute', authCtrl.testRoute)

module.exports = router