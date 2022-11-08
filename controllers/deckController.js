const DeckModel = require('../models/Deck')

const index = async (req, res) => {
    try {
        const foundCurrentUsersDeck = await DeckModel.find({ user: req.user })
        res.status(200).json({ decks: foundCurrentUsersDeck})
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const add = async (req, res) => {
    try {
        const createdDeckForCurrentUser = await DeckModel.create(req.body)
        res.status(200).json({ deck: createdDeckForCurrentUser })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const clear = async (req, res) => {
    try {
        await DeckModel.deleteMany({})
        res.status(200).json({ msg: 'Deck has been deleted.'})
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    index,
    add,
    clear
}