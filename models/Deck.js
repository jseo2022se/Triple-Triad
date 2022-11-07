const mongoose = require("mongoose")

const Schema = mongoose.Schema

const deckSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        required: true
    }
})

const DeckModel = mongoose.model('Deck', deckSchema)

module.exports = DeckModel