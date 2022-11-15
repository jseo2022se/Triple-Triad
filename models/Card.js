const mongoose = require("mongoose")

const Schema = mongoose.Schema

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
})

const CardModel = mongoose.model('Card', cardSchema)

module.exports = CardModel