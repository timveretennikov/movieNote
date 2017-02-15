import MovieList from '../components/MovieList'
import { connect } from 'react-redux'
import React from 'react'
import MovieActions from '../actions/movieActions'
import { browserHistory } from 'react-router'

class SavedMovieList extends React.Component {
    constructor(props) {
        super(props)

        this.dispatch = this.props.dispatch
        this.onDeleteMovie = this.onDeleteMovie.bind(this)
        this.onMovieSelected = this.onMovieSelected.bind(this)
    }
    onDeleteMovie(id) {

        this.dispatch(MovieActions.deleteMovie(id))
    }
    onMovieSelected(id) {

        this.dispatch(MovieActions.showMovieDetails(id))
        browserHistory.push('/movie')
    }
    componentDidMount() {
        if (!this.props.moviesWereLoaded) {
            this.props.dispatch(MovieActions.getSavedMovies())
        }
    }
    render() {
        return (
            <MovieList movies={this.props.movies}
                onDelete={this.onDeleteMovie}
                onMovieClick={this.onMovieSelected} />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        movies: state.movies.savedMovies,
        moviesWereLoaded: state.movies.savedMoviesWereLoaded
    }
}

export default connect(mapStateToProps)(SavedMovieList)