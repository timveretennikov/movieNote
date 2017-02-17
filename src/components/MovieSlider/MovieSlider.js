import React from 'react'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import Carousel from 'reactive-carousel'

const MovieSlider = ({movies, onMovieClick}) => {
    if (movies.length > 0) {
        debugger
        return (
            <Carousel style={{ height: '400px' }}>
                {movies.map((movie) => {
                    return (
                        <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w1000${movie.backdrop_path}` : 'http://lorempixel.com/200/300/abstract/'}
                            key={movie.id}
                            caption={movie.title}
                            onClick={()=>{click(movie.id)}} />
                    )
                })}
            </Carousel>
        )
    } else {
        return (
            <h1>Loading..</h1>
        )
    }
    function click(id) {
        alert('Hello ' + id)
        debugger
        onMovieClick(id)
    }
}

export default MovieSlider