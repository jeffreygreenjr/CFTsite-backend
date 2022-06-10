const mongoose = require('mongoose')

const coachScema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Coach's name is required"]
    },
    teaches: {
        type: String,
        required: [true, "The classes they coach are required"]
    },
    belt: {
        type: String,
        required: [true, "Their belt level is required"]
    },
    image: {
        type: String,
        default: "https://i.imgur.com/6uWXLaL.png"
    }
},
    {
        timestamps: true
    }
)

const Coach = mongoose.model('Coach', coachSchema)
module.export = Coach;