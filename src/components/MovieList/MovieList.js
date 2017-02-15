import React from 'react'
import MovieListItem from '../MovieListItem'
import Subheader from 'material-ui/Subheader'
import { List } from 'material-ui/List'
import Divider from 'material-ui/Divider'

class MovieList extends React.Component {
    render() {
        
        return (
            <List>
                <Subheader>Movie List</Subheader>
                {this.props.movies.map(movie =>
                    <div key={movie.id.toString()}>
                        <MovieListItem 
                            movie={movie}
                            onDelete={this.props.onDelete}
                            onMovieClick={this.props.onMovieClick} />
                        <Divider />
                    </div>
                )}
            </List>
        )
    }
}

export default MovieList