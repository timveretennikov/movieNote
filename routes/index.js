const express = require('express')
const moviedb = require('moviedb')('9f3478b8a35d2e46725321f7c93bd2a4')
const router = express.Router()
const db = require('../server').db
const Movie = require('../models/movie')


router.get('/popular', (req, res) => {
    moviedb.miscPopularMovies((err, data) => {
        res.json(data)
    })
})

router.get('/search/:query', (req, res) => {
    moviedb.searchMovie({ query: req.params.query }, (err, data) => {
        res.json(data)
    })
})

router.get('/movie/:id', (req, res) => {
    moviedb.movieInfo({ id: req.params.id }, (err, data) => {
        res.json(data)
    })
})

router.get('/savedMovies', (req, res) => {
    Movie.find({}, (err, movies) => {
        if (err) throw err

        res.json(movies)
    })
})

router.post('/savedMovies', (req, res) => {
    let movie = new Movie({
        id: req.body.id,
        title: req.body.title,
        poster_path: req.body.poster_path
    })

    movie.save((err) => {
        res.json(!err)
    })
})

router.delete('/savedMovies/:id', (req, res) => {
    let id = req.params.id

    Movie.remove({ id }, (err) => {
        res.json(!err)
    })
})

module.exports = router

