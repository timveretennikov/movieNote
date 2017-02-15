import React from 'react'
import SavedMovieList from '../../containers/SavedMovieList'
import PopularMovies from '../../containers/PopularMovies'

const Home = () => {
    return (
        <div>
            <PopularMovies />
            <SavedMovieList />
        </div>
    )
}

export default Home