import React from 'react';
import { AvailableShowtimes } from './AvailableShowtimes';
import {MovieInfo} from './MovieInfo';

class Movie extends React.Component {
    state = {
        movie: []
    }
    
    render() {
        return (
            <div>
            <MovieInfo title={this.props.title}></MovieInfo>
            <AvailableShowtimes time={this.props.time}></AvailableShowtimes>
            </div>
        )
    }
}

export default Movie;
