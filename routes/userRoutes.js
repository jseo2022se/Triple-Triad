const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/userController')

router.get('/info', userCtrl.info)
router.delete('/clear', userCtrl.clear)
router.get('/all', userCtrl.allUsers)
router.put('/edit', userCtrl.edit)

module.exports = router