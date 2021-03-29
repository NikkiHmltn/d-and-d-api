const mongoose = require('mongoose')

const raceSchema = new mongoose.schema({
    name: String,
    description: String,
})

module.exports = mongoose.model("races", raceSchema)