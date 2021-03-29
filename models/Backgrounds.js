const mongoose = require('mongoose')

const backgroundSchema = new mongoose.Schema({
    name: String,
    description: String,
})

module.exports = mongoose.model("backgrounds", backgroundSchema)