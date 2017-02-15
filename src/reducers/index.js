import { combineReducers } from 'redux'
import movies from './movies'

const movieKeepApp = combineReducers({
    movies
})

export default movieKeepApp