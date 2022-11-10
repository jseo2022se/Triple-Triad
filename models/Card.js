const mongoose = require("mongoose")

const Schema = mongoose.Schema

// rename the schema -> card
const cardSchema = new Schema({
    userid: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    cardinfo: Schema.Types.Mixed
    // make a third property and call it deck type string
})

const CardModel = mongoose.model('Card', cardSchema)

module.exports = CardModel