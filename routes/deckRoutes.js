const express = require('express')
const router = express.Router()
const deckCtrl = require('../controllers/deckController')

router.get('/index', deckCtrl.index)

router.delete('/clear', deckCtrl.clear)

router.delete('/remove', deckCtrl.remove)

router.post('/add', deckCtrl.add)

module.exports = router