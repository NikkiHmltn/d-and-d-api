const mongoose = require('mongoose')

const subClassSchema = new mongoose.Schema({
    name: String,
    description: String,
})

const classesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    }, 
    description: String,
    subclass: [subClassSchema],
})

module.exports = mongoose.model("classes", classesSchema)