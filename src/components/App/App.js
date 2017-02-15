import React from 'react'
import MovieSearch from '../MovieSearch'
import MainHeader from '../MainHeader'
import { Route, Router, browserHistory } from 'react-router'
import MovieDetailsContainer from '../../containers/MovieDetailsContainer'
import SavedMovieList from '../../containers/SavedMovieList'
import './App.css'

const App = () => {
    return (
        <div className="movie-keep">
            <MainHeader />
            <MovieSearch />
            <Router history={browserHistory}>
                <Route path="/" component={SavedMovieList} />
                <Route path="movie" component={MovieDetailsContainer}/>
            </Router>
        </div>
    )
}

export default App