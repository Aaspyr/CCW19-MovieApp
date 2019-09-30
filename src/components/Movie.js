import React from 'react';

class Movie extends React.Component {
    state = {
        movie: [],
        fat: []
    }
    
    render() {
        return (
            <div>
            {this.props.title}
            </div>
        )
    }
}

export default Movie;
