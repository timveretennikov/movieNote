import React from 'react'
import { ListItem } from 'material-ui/List'
import IconButton from 'material-ui/IconButton'
import { grey400 } from 'material-ui/styles/colors'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import Avatar from 'material-ui/Avatar'

const MovieListItem = ({movie, onDelete, onMovieClick}) => {
    const iconButtonElement = (
        <IconButton tooltip="more"
            tooltipPosition="bottom-left">
            <MoreVertIcon color={grey400} />
        </IconButton>
    )

    const rightIconMenu = (
        <IconMenu iconButtonElement={iconButtonElement}>
            <MenuItem onClick={() => { onMovieClick(movie.id) } }>Show Details</MenuItem>
            <MenuItem onClick={() => { onDelete(movie.id) } }>Delete</MenuItem>
        </IconMenu>
    )
    
    return (
        <ListItem primaryText={movie.title}
                  leftAvatar={movie.poster_path ? <Avatar src={`https://image.tmdb.org/t/p/w150${movie.poster_path}`}/> : null}
            rightIconButton={rightIconMenu} />
    )
}

export default MovieListItem