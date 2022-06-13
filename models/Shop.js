const mongoose = require('mongoose')

const shopSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "The product name is required"]
    },
    price: {
        type: String,
        required: [true, "The price is required"]
    },
    image: {
        type: String,
        required: [true, "This product must have a photo"]
    }
},
    {
        timestamps: true
    }
)

const Shop = mongoose.model('Shop', shopSchema)
module.exports = Shop;