import React from 'react';
import Movie from './Movie';
import axios from 'axios';


class DaysBookmarks extends React.Component {
    state = {
       repertoire: [],
       currentMovies: []
    }
    componentDidMount() {
        axios.get('https://cinemaapp2019.herokuapp.com/api/repertoires')
            .then(res => {
                this.setState({ repertoire: [...res.data], currentMovies: res.data[0].movies  })
            })
            .catch(err => {
                console.log(err);
            })
    }

    // getMovie = dayNumber => {
    //     const day = this.state.repertoire[dayNumber];
    //     if(day){
    //         return day.movies.map(movie => {
    //             return <Movie {...movie} key={movie._id}/>
    //         })
    //     }
    // }

    handleClick = (day) => {
        this.setState({currentMovies: day.movies})
    }

    render() {
        return (
            <>
                {this.state.repertoire.map( day => {
                    return <button key={day._id} onClick={() => this.handleClick(day)}>{day.date}</button>;
                })}

                {this.state.currentMovies.map(movie => {
                    return <Movie {...movie} key={movie._id}/>
                })}         
            </>
            
        )
    }
}

export default DaysBookmarks;
