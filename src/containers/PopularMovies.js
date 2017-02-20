import React from 'react'
import MovieSlider from '../components/MovieSlider'
import { connect } from 'react-redux'
import MovieActions from '../actions/movieActions'
import { browserHistory } from 'react-router'

class PopularMovies extends React.Component {
    constructor (props) {
        super(props)
        
        this.onMovieClick = this.onMovieClick.bind(this)
    }
    componentDidMount() {
        debugger
        if (!this.props.savedMoviesWereLoaded) {
            this.props.dispatch(MovieActions.getPopularMovies())
        }
    }

    onMovieClick(id) {
        this.props.dispatch(MovieActions.showMovieDetails(id))
        browserHistory.push('/movie')
    }

    render() {
        return (
            <div>
                <MovieSlider movies={this.props.movies}
                    onMovieClick={this.onMovieClick} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    debugger
    return {
        movies: state.movies.popularMovies,
        savedMoviesWereLoaded: state.movies.savedMoviesWereLoaded
    }
}

export default connect(mapStateToProps)(PopularMovies)

