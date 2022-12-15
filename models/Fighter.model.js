const mongoose = require('mongoose')

const FighterSchema = mongoose.Schema({
    name: {
        firstName: String,
        lastName: String
    },
    alias: String,
    age: Number,
    height: Number,
    weight: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Category'
    },
    statistic: {
        win: Number,
        draw: Number,
        loss: Number
    },
    image: String,
    champion: {
        type: Boolean,
        default: false
    },
})

const Fighter = mongoose.model('Fighter', FighterSchema)
module.exports = Fighter