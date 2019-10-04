import React from 'react';
import MovieInfo from './MovieInfo'
import AvailableShowtimes from "./AvailableShowtimes"

const Movie = props => {
    return (
            <>
            <MovieInfo key={props._id} title={props.title} image={props.posterUrl} description={props.description}></MovieInfo>
            <AvailableShowtimes key={props._id+"availableShowtimes"} showTimes={props.showTimes}></AvailableShowtimes>
            </>
        );
}

export default Movie
