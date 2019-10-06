import React from 'react';
import Movie from './Movie';
import axios from 'axios';
import PlacesSelectionPanel from './PlacesSelectionPanel';
import Header from './Header'
import './DaysBookmarks.css';

class DaysBookmarks extends React.Component {
    state = {
       repertoire: [],
       currentMovies: [],
       currentDay: '',
       room: {},
       date: [],
       today: ''
    }
    componentDidMount() {
        axios.get('https://cinemaapp2019.herokuapp.com/api/repertoires')
            .then(res => {
                this.setState({ repertoire: [...res.data], currentMovies: res.data[0].movies, currentDay: res.data[0]._id, today: res.data[0].date })
            })
            .catch(err => {
                console.log(err);
            })
        const date = new Date().getDate(); //Current Date
        const month = new Date().getMonth() + 1; //Current Month
        const year = new Date().getFullYear(); //Current Year

    this.setState({
      date:
        date + '.' + month + '.' + year
        });
    }

    handleSelectDay = (day) => {
        this.setState({currentMovies: day.movies, currentDay: day._id})
    }

    handleSelectSale = (showTimeID, movieID, dayID) => {
        console.log(showTimeID, movieID, dayID)
        this.setState({ room: { showTimeID, movieID, dayID}})
    }

    render() {
        
        return (
            <>
                <div className="container">
                    <Header />
                    <div className="content">
                        <div className="daybar">
                            <div className="arrow left"> &lt; </div>
                            {this.state.repertoire.map( day => {
                                return <div className="day" key={day._id} onClick={() => this.handleSelectDay(day)}>{day.date}</div>;
                        })}
                            <div className="arrow right"> &gt; </div>
                            <div className="calendar"><img src={require('../icons/kalendarz.svg')} className="calendarpic" alt="calendar"/> </div>
                        </div>
                        <div className="today">{`${this.state.today},${this.state.date}`}</div>
                        <div className="feed">
                            {this.state.currentMovies.map(movie => {
                                return <Movie {...movie} currentDay={this.state.currentDay} key={movie._id} selectSale={this.handleSelectSale}/>
                            })}  
                        </div>
                    </div>
                </div>   

                <PlacesSelectionPanel {...this.state.room}/>
            </>
            
        )
    }
}

export default DaysBookmarks;
