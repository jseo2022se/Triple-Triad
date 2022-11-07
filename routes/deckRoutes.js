const express = require('express')
const router = express.Router()
const deckCtrl = require('../controllers/deckController')

router.get('/index', deckCtrl.index)

router.post('/add', deckCtrl.add)

module.exports = router