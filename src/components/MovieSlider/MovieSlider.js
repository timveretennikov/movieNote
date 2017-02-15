import React from 'react'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import Coverflow from 'react-coverflow'

const MovieSlider = ({movies, onMovieClick}) => {
    if(movies.length > 0){
        return (
            <Coverflow
                width={1000}
                height={480}
                displayQuantityOfSide={2}
                navigation={true}
                enableHeading={false}>
                {movies.map((movie)=> {
                    return (
                        <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : 'http://lorempixel.com/200/300/abstract/'}
                            key={movie.id}
                            data-action={() => { onMovieClick(movie.id)}} />
                    )
                })}
            </Coverflow>
        )
    } else {
        return (
            <h1>Loading..</h1>
        )
    }
}

export default MovieSlider