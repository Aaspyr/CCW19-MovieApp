import React from 'react';
import { AvailableShowtimes } from './AvailableShowtimes';
import {MovieInfo} from './MovieInfo';

class Movie extends React.Component {


    // unique = () => {
    //     let uniq = [];
    //     uniq = _.uniq([this.props.title]);
    //     uniq.map(e=> {
    //         return uniq + e;
    //     });
    //     return [console.log(uniq), console.log(this.props.title)];
    // }
    // NIE UMIEM :'(

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
