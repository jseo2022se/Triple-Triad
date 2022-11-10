const CardModel = require('../models/Card')

const index = async (req, res) => {
    try {
        // change req.user to req.userId
        console.log('user id: ',req.userId)
        const foundCurrentUsersCards = await CardModel.find({userid: req.userId})
        res.status(200).json({ cards: foundCurrentUsersCards})
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const add = async (req, res) => {
    try {
        const addedCardForCurrentUser = await CardModel.create(req.body)
        res.status(200).json({ card: addedCardForCurrentUser })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const remove = async (req, res) => {
    try {
        // console.log('inside of card controller remove: ', req.params.id)
        const removedCardList = await CardModel.findByIdAndDelete(req.params.id)
        res.status(200).json({ card: removedCardList})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const clear = async (req, res) => {
    try {
        // req.user -> req.userId
        await CardModel.deleteMany({userid: req.userId})
        res.status(200).json({ msg: 'Cards has been deleted.'})
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const updateinfo = async (req, res) => {
    console.log('inside update info controller: ',req.body)
    try {
        const foundCards = await CardModel.updateMany({userid: req.userId}, req.body)
        res.status(200).json({msg: 'updated cards: ', foundCards})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    index,
    add,
    clear,
    remove,
    updateinfo
}