const mongoose = require("mongoose")

const Schema = mongoose.Schema

const deckSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    card: Schema.Types.Mixed
})

const DeckModel = mongoose.model('Deck', deckSchema)

module.exports = DeckModel