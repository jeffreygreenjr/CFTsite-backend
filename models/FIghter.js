const mongoose = require('mongoose')

const fighterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Fighter's name is required"]
    },
    nickname: {
        type: String,
    },
    stance: {
        type: String,
        required: [true, "Their stance is required"]
    },
    weight: {
        type: String,
        required: [true, "Their weight is required"]
    },
    weightclass: {
        type: String,
        required: [true, "Their weight class is required"]
    },
    record: {
        type: String,
        required: [true, "Their record is required"]
    },
    image: {
        type: String,
        default: "https://i.imgur.com/6uWXLaL.png"
    },
    competitiontype: {
        type: String,
        required: [true, "Their competition types are required"]
    },
    promotions: {
        type: String,
    },
},
    {
        timestamps: true
    }
)

const Fighter = mongoose.model('Fighter', fighterSchema)
module.exports = Fighter;