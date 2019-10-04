import React from 'react';
import MovieInfo from './MovieInfo'
import AvailableShowtimes from "./AvailableShowtimes"

const Movie = props => {
    return (
            <div>
            <MovieInfo id={props._id} title={props.title} image={props.posterUrl} description={props.description}></MovieInfo>
            <AvailableShowtimes time={props.showTimes}></AvailableShowtimes>
            </div>
        );
}

export default Movie
