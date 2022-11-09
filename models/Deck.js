const mongoose = require("mongoose")

const Schema = mongoose.Schema

// rename the schema -> card
const deckSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    card: Schema.Types.Mixed
    // make a third property and call it deck type string
})

const DeckModel = mongoose.model('Deck', deckSchema)

module.exports = DeckModel