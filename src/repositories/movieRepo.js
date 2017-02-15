import axios from 'axios'

const apiPath = '/api'

class MovieRepo {
    static searchMovies (query) {
        return axios.get(`${apiPath}/search/${query}`)
    }

    static saveMovie (movie) {
        return axios.post(`${apiPath}/savedMovies`, movie)
    }

    static deleteMovie (id) {
        return axios.delete(`${apiPath}/savedMovies/${id}`)
    }

    static getSavedMovies () {
        return axios.get(`${apiPath}/savedMovies`)
    }

    static getMovieDetails (id) {
        return axios.get(`${apiPath}/movie/${id}`)
    }

    static getPopularMovies () {
        return axios.get(`${apiPath}/popular`)
    }
}

export default MovieRepo