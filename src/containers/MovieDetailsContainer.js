import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import MovieActions from '../actions/movieActions'
import MovieDetails from '../components/MovieDetails'



const mapStateToProps = (state, ownProps) => {
    return {
        movie: state.movies.chosenMovie,
        isLoading: state.movies.isLoadingDetails,
        isMovieSaved: checkIfChosenMovieIsSaved(state.movies.savedMovies, state.movies.chosenMovie, state.movies.isLoading)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveMovieToList: (movie) => { saveMovieToList(dispatch, movie) }
    }
}

function saveMovieToList(dispatch, movie) {
        debugger
        dispatch(MovieActions.saveMovieToList(movie))
        browserHistory.push('/')
}

function checkIfChosenMovieIsSaved(movies, chosenMovie, isLoading) {
    if (isLoading || !chosenMovie) {
        return false
    }

    return movies.filter((movie) => {
        return movie.id === chosenMovie.id
    }).length > 0
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)