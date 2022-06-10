const mongoose = require('mongoose')

const classScema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Coach's name is required"]
    },
    schedule: {
        type: String,
        required: [true, "The class schedule is required"]
    },
    image: {
        type: String,
        required: [true, "Their belt level is required"]
    },
    image: {
        type: String,
        default: "https://i.imgur.com/EQDB1gh.png"
    }
},
    {
        timestamps: true
    }
)

const Class = mongoose.model('Class', classSchema)
module.export = Class;