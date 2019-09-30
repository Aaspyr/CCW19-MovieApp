import React from 'react';
import Movie from './Movie';
import axios from 'axios';


class DaysBookmarks extends React.Component {
    state = {
       movie: [],
       time: []
    }
    componentDidMount() {
        axios.get('https://cinemaapp2019.herokuapp.com/api/repertoires')
            .then(res => {
                this.setState({ movie: [...res.data]  })
                console.log(res.data)
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
    getTime = dayNumber => {
        const day = this.state.movie[dayNumber];
        if(day){
            return day.movies.map(movie => {
                return movie.showTimes.map(time => {
                    return <Movie {...time} key={time._id}/>
                } )
                
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
                {this.getTime(0)}
            </div>
            
        )
    }
}

export default DaysBookmarks;
