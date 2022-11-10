const express = require('express')
const router = express.Router()
const cardCtrl = require('../controllers/cardController')

router.get('/index', cardCtrl.index)

router.delete('/clear', cardCtrl.clear)

router.put('/updateinfo', cardCtrl.updateinfo)

router.delete('/remove/:id', cardCtrl.remove)

router.post('/add', cardCtrl.add)

module.exports = router