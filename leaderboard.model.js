const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "debe tener un nombre"]
    },
    score: {
        type: Number,
        min: 0,
        required: [true, "debe tener un score"]
    },
    



})

module.exports = mongoose.model("scores", productSchema)