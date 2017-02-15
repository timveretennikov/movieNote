import React from 'react'
import RefreshIndicator from 'material-ui/RefreshIndicator'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import Subheader from 'material-ui/Subheader'
import RaisedButton from 'material-ui/RaisedButton'
import { browserHistory } from 'react-router'
import './MovieDetails.css'

class MovieDetails extends React.Component {
    constructor(props) {
        super(props)
        this.dispatch = this.props.dispatch
    }

    componentDidMount() {
        if (!this.props.movie && !this.props.isLoading) {
            browserHistory.push('/')
        }
    }

    render() {
        const { movie, isLoading, isMovieSaved } = this.props
        if (isLoading) {
            return (
                <div className="loading-details-block">
                    <div className="loading-indicator-container">
                        <RefreshIndicator size={40}
                            left={0}
                            top={0}
                            status="loading" />
                    </div>
                </div>
            )
        } else if (movie) {
            return (
                <div className="movie-details ">
                    <Card className="movie-card">
                        <CardMedia overlay={<CardTitle title={movie.title} subtitle={movie.tagline} />}>
                            <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : 'http://lorempixel.com/200/300/abstract/'}
                                className="movie-card-img" />
                        </CardMedia>
                    </Card>
                    <div className="movie-side-section">
                        <h3>Rating: {movie.vote_average}</h3>
                        <p>{movie.overview}</p>
                        {!isMovieSaved && <RaisedButton onClick={() => { this.props.saveMovieToList(movie) }} 
                                                        label="Watch Later" 
                                                        primary={true}/>}
                    </div>
                </div>
            )
        } else {
            return (
                <h2>No Movie Selected</h2>
            )
        }
    }
}

export default MovieDetails

