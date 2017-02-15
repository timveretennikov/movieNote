import {
    MOVIE_SEARCH_REQUESTED, MOVIE_SEARCH_SUCCESSFUL, SHOW_MOVIE_DETAILS,
    MOVIE_SAVE_REQUESTED, MOVIE_SAVE_SUCCESSFUL, SAVED_MOVIES_REQUESTED,
    SAVED_MOVIES_RECEIVED, MOVIE_DELETE_REQUESTED, MOVIE_DELETE_SUCCESSFUL,
    MOVIE_DETAILS_REQUESTED, MOVIE_DETAILS_RECEIVED
} from './'
import MovieRepo from '../repositories/movieRepo'

class MovieActions {
    static searchMovies(query) {
        return (dispatch) => {
            dispatch(MovieActions.movieSearchRequested())

            return MovieRepo.searchMovies(query)
                .then((response) => {
                    dispatch(MovieActions.movieSearchSuccessful(response.data))
                })
        }
    }

    static movieSearchRequested() {
        return {
            type: MOVIE_SEARCH_REQUESTED
        }
    }

    static movieSearchSuccessful(movies) {
        return {
            type: MOVIE_SEARCH_SUCCESSFUL,
            payload: movies
        }
    }

    static showMovieDetails(id) {
        return (dispatch) => {
            dispatch(MovieActions.movieDetailsRequested(id))

            MovieRepo.getMovieDetails(id).then((response)=> {
                if(response.status === 200) {
                    dispatch(MovieActions.movieDetailsReceived(response.data))
                } else {
                    //handle errors
                }
            })
        }
    }

    static movieDetailsRequested(id) {
        return {
            type: MOVIE_DETAILS_REQUESTED,
            payload: id
        }
    }

    static movieDetailsReceived(movie) {
        return {
            type: MOVIE_DETAILS_RECEIVED,
            payload: movie
        }
    }

    static saveMovieToList(movie) {
        debugger
        return (dispatch) => {
            dispatch(MovieActions.movieSaveRequested())
            
            MovieRepo.saveMovie(movie).then((response) => {
                debugger
                if (response.status === 200 && response.data) {
                    dispatch(MovieActions.movieSaveSuccessful(movie))
                } else {
                    //hadnle errors
                }
            })
        }
    }

    static movieSaveRequested() {
        return {
            type: MOVIE_SAVE_REQUESTED
        }
    }

    static movieSaveSuccessful(movie) {
        return {
            type: MOVIE_SAVE_SUCCESSFUL,
            payload: movie
        }
    }

    static getSavedMovies() {
        
        return (dispatch) => {
            dispatch(MovieActions.savedMoviesRequested)

            MovieRepo.getSavedMovies().then((response) => {
                
                if(response.status === 200) {
                    dispatch(MovieActions.savedMoviesReceived(response.data))
                }
            })
        }
    }

    static savedMoviesRequested() {
        return {
            type: SAVED_MOVIES_REQUESTED
        }
    }

    static savedMoviesReceived(movies) {
        return {
            type: SAVED_MOVIES_RECEIVED,
            payload: movies
        }
    }

    static deleteMovie (id) {
        return (dispatch) => {
            dispatch(MovieActions.movieDeleteRequested(id))   

            MovieRepo.deleteMovie(id).then((response)=> {
                if(response.data) {
                    dispatch(MovieActions.movieDeleteSuccessful(id))
                } else {
                    //handle errors
                }
            }) 
        }
    }

    static movieDeleteRequested (id) {
        return {
            type: MOVIE_DELETE_REQUESTED,
            payload: id
        }
    }

    static movieDeleteSuccessful (id) {
        return {
            type: MOVIE_DELETE_SUCCESSFUL,
            payload: id
        }
    }
}

export default MovieActions