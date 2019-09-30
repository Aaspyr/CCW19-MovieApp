import React from 'react';
import Movie from './Movie';
import axios from 'axios';


class DaysBookmarks extends React.Component {
    state = {
       movie: []
    }
    componentDidMount() {
        axios.get('https://cinemaapp2019.herokuapp.com/api/repertoires')
            .then(res => {
                this.setState({ movie: [...res.data]  })
            })
            .catch(err => {
                console.log(err);
            })
    }

    getMovie = dayNumber => {
        const day = this.state.movie[dayNumber];
        if(day){
            return day.movies.map(movie => {
                return <Movie {...movie} key={movie._id}/>
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.movie.map( day => {
                    return <button key={day._id}>{day.date}</button>;
                })}
                {this.getMovie(0)}
            </div>
            
        )
    }
}

export default DaysBookmarks;
