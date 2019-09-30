import React from 'react';
import {AvailableShowtimes} from './AvailableShowtimes';
import {MovieInfo} from './MovieInfo';

export const Movie = (rep) => {

    return (
        <div>
        <MovieInfo/>
        <AvailableShowtimes rep={rep}/>
        </div>
    )
}
