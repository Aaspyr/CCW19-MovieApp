import React from 'react';
import { AvailableShowtimes } from './AvailableShowtimes';
import {MovieInfo} from './MovieInfo';

export Movie = props => {
    return (
            <div>
            <MovieInfo id={props.id} title={props.title} image={props.posterUrl} description={props.description}></MovieInfo>
            <AvailableShowtimes time={this.props.time}></AvailableShowtimes>
            </div>
        );
}

    // unique = () => {
    //     let uniq = [];
    //     uniq = _.uniq([this.props.title]);
    //     uniq.map(e=> {
    //         return uniq + e;
    //     });
    //     return [console.log(uniq), console.log(this.props.title)];
    // }
    // NIE UMIEM :'(

