import {
    MOVIE_SEARCH_SUCCESSFUL, MOVIE_DETAILS_RECEIVED, MOVIE_SAVE_SUCCESSFUL,
    SAVED_MOVIES_RECEIVED, MOVIE_DELETE_SUCCESSFUL, MOVIE_DETAILS_REQUESTED
} from '../actions'

const defaultState = {
    searchResult: [],
    chosenMovie: null,
    savedMovies: [],
    isLoadingDetails: false,
    savedMoviesWereLoaded: false
}

const movies = (state = defaultState, action) => {
    switch (action.type) {
        case MOVIE_SEARCH_SUCCESSFUL:
            return Object.assign({}, state, {
                searchResult: action.payload.results
            })
        case MOVIE_DETAILS_REQUESTED: 
            return Object.assign({}, state, {
                isLoadingDetails: true
            })
        case MOVIE_DETAILS_RECEIVED:
            
            return Object.assign({}, state, {
                chosenMovie: action.payload,
                isLoadingDetails: false
            })
        case MOVIE_SAVE_SUCCESSFUL:
            debugger
            return Object.assign({}, state, {
                savedMovies: [...state.savedMovies, action.payload]
            })
        case SAVED_MOVIES_RECEIVED:
            return Object.assign({}, state, {
                savedMovies: [...state.savedMovies, ...action.payload],
                savedMoviesWereLoaded: true
            })
        case MOVIE_DELETE_SUCCESSFUL:
            return Object.assign({}, state, {
                savedMovies: removeMovieFromArrayById(state.savedMovies, action.payload)
            })
        default:
            return state
    }
}

function removeMovieFromArrayById (array, id) {
    return array.filter((movie) => {
        return movie.id !== id
    })
}

export default movies