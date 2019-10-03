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
                // console.log(res.data);
                const movie = res.data.map(day => {
                    return day.date;
                });
                this.setState({ movie  })
                // console.log(this.state.movie)
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <div>
            {this.state.movie.map((day, key) => {
                return <button key={key}>{day}</button>;
            })}
             {this.state.movie.map((day, key) => {
                return <Movie time={day} key={key}/>
            })}
            <Movie />
            </div>
            
        )
    }
}

export default DaysBookmarks;
