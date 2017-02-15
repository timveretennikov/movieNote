const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
    poster_path: String,
    id: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie