const mongoose = require('mongoose')

const pathSchema = new mongoose.Schema({
    name: String,
    description: String,
})

const featuresSchema = new mongoose.Schema({
    name: String,
    description: String
})

const profienciesSchema = new mongoose.Schema({
    armors: [String],
    weapons: [String],
    tools: [String],
    saving_throws: [String],
    skills: String
})

const classesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    }, 
    description: String,
    hit_dice: String,
    hit_points_at_first_level: String,
    hit_points_at_higher_levels: String,
    profiencies: [profienciesSchema],
    spellcasting_ability: String,
    features: [featuresSchema],
    archetype: String,
    paths: [pathSchema],

})

module.exports = mongoose.model("classes", classesSchema)
