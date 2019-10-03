import React from 'react';
import Movie from './Movie';
import axios from 'axios';

class DaysBookmarks extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movie: [],
            time: []
        }
        this.handleDay=this.handleDay.bind(this)
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
    handleDay() {  
        this.setState(state => ({
            movie: !state.movie 
        }));
    }

    getMovie = dayNumber => {
        const day = this.state.movie[dayNumber];
        if(day) {
            return day.movies.map(movie => {
                return movie.showTimes.map((hour, index)=> {
                        return  <Movie {...movie} {...hour} key={index}/>
                    })
            })
        }
    }
    getDay = () => {
        const day = this.state.movie.map(day => {
            return <button>{day.date}</button>;
        });
        return day;
    }
    // getTime = dayNumber => {
    //     const day = this.state.movie[dayNumber];
    //     if(day){
    //         return day.movies.map(movie => {
    //             return movie.showTimes.map(time => {
    //                 return <Movie {...time} key={time._id}/>
    //             } )
                
    //         })
    //     }
    // }
    getWholeRepertuar = () => {
        return this.state.movie.map(data => {
           return data.movies.map(movie => {
               return [ <Movie {...movie} key={movie._id}/>,
                        movie.showTimes.map(time => {
                        return <Movie {...time} key={time._id}/>
                })
            ]
            })
        })
    }
    render() {
        return (
            <div>
                {/* <div onClick={this.handleDay}>{this.getDay()}</div> */}
                {this.state.movie.map( day => {
                    return <button onClick={this.handleDay} key={day._id}>{day.date}</button>;
                })}
                {this.getMovie(0)}
                {/* {this.getMovie(1)} */}
                {/* {this.getTime(0)} */}
                {/* {this.getWholeRepertuar()} // tylko dla najdzielnieszych! Nie dla niedzielnych programistów */}
            </div>
            
        )
    }
}

export default DaysBookmarks;
