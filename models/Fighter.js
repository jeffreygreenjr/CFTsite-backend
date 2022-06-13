const mongoose = require('mongoose')

const fighterSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    nickname: {
        type: String,
    },
    stance: {
        type: String,
    },
    weight: {
        type: String,
    },
    weightclass: {
        type: String,
    },
    record: {
        type: String,
    },
    image: {
        type: String,
        default: "https://thatshirt.com/wp-content/uploads/2017/12/thatshirt-t-shirt-clip-art-martial-arts-mma_fighter_7-39517.jpg"
    },
    competitiontype: {
        type: String,
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