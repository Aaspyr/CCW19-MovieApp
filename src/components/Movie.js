import React from 'react';
import {AvailableShowtimes} from './AvailableShowtimes';
import {MovieInfo} from './MovieInfo';
import axios from 'axios';

class Movie extends React.Component {
    state = {
        movie: [],
        fat: []
    }
    componentDidMount() {
        axios.get('https://cinemaapp2019.herokuapp.com/api/repertoires')
            .then(res => {
                console.log(res.data)
                const movie = res.data.map(day => {
                    return day.movies.map(movie => {
                        return movie.showTimes.map(time => {
                            return time.time
                        });
                    });
                });
                this.setState({ movie  })
                console.log(movie)
            })
            .catch(err => {
                console.log(err);
            })
    }
    render() {
        return (
            <div>
            <MovieInfo/>
            {this.state.movie.map((day, key) => {
            return <AvailableShowtimes time={day} key={key}/>
            })}
            </div>
        )
    }
}

export default Movie;
