import { connect } from 'react-redux'
import React from 'react'
import { browserHistory } from 'react-router'
import AutoComplete from 'material-ui/AutoComplete'
import MovieActions from '../../actions/movieActions'

class MovieSearch extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            searchText: ''
        }

        this.dispatch = this.props.dispatch
        this.onUpdateInput = this.onUpdateInput.bind(this)
        this.onNewRequest = this.onNewRequest.bind(this)
    }

    onUpdateInput (searchText, dataSource, params) {
        if(params.source === 'change'){
            this.dispatch(MovieActions.searchMovies(searchText))
        }
        this.setState({
            searchText
        })
    }

    onNewRequest (chosenMovie) {
        if (chosenMovie) {
            this.setState({ searchText: ''})
            this.dispatch(MovieActions.showMovieDetails(chosenMovie.id))
            browserHistory.push('/movie')
        }
    }

    render() {
        return (
            <AutoComplete dataSource={this.props.searchResult}
                            dataSourceConfig={{text: 'title', value: 'id'}}
                            onUpdateInput={this.onUpdateInput}
                            onNewRequest={this.onNewRequest}
                            searchText={this.state.searchText}
                            fullWidth={true}
                            hintText="Type here to find a movie..."
                            filter={(searchText, key)=> (true)}/>
        )
    }
}

const mapPropsToState = (state, ownProps) => {
    return {
        searchResult: state.movies.searchResult
    }
}

export default connect(mapPropsToState)(MovieSearch)