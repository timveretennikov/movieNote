import React from 'react'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import Carousel, {CarouselElement} from 'reactive-carousel'

const MovieSlider = ({movies, onMovieClick}) => {
    if (movies.length > 0) {
        return (
            <Carousel autoplay={true}
                      showAutoplayButton={true}>
                {movies.map((movie) => {
                    return (
                        <CarouselElement imagePath={movie.poster_path ? `https://image.tmdb.org/t/p/w1000${movie.backdrop_path}` : 'http://lorempixel.com/200/300/abstract/'}
                                         key={movie.id}
                                         caption={movie.title}
                                         onClickCb={()=> {onMovieClick(movie.id)}}/>
                    )
                })}
            </Carousel>
        )
    } else {
        return (
            <h1>Loading..</h1>
        )
    }
}

export default MovieSlider