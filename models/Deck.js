const mongoose = require("mongoose")

const Schema = mongoose.Schema

const deckSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    cardnumber: {
        type: Number,
        required: true
    },
    carddetails: {
        type: String,
        required: true
    },
    cardname: {
        type: String,
        required: true
    },
    cardimage: {
        type: String,
        required: true
    }
})

const DeckModel = mongoose.model('Deck', deckSchema)

module.exports = DeckModel