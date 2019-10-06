import React from 'react';
import MovieInfo from './MovieInfo';
import AvailableShowtimes from "./AvailableShowtimes";
import './Movie.css';

const Movie = props => {
    return (    
            <>
            <div className="movieBox">
                
                <MovieInfo key={props._id} title={props.title} image={props.posterUrl} description={props.description}></MovieInfo>
                
            
            </div>
            <div className="timeBtns">
                    <div className="box">
                    <AvailableShowtimes key={props._id+"availableShowtimes"} showTimes={props.showTimes}></AvailableShowtimes>
                    </div>
            </div>
            </>
        );
}

export default Movie;

