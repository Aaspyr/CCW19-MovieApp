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
                this.setState({ 
                    repertoire: [...res.data], 
                    currentMovies: res.data[0].movies, 
                    currentDay: res.data[0]._id, 
                    today: res.data[0].date,
                    room: {
                        showTimeID: '',
                        movieID: '',
                        dayID: '', 
                        movieTitle: res.data[0].movies[0].title, 
                        movieTime: res.data[0].movies[0].showTimes[0].time
                    }
                })
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

    handleSelectSale = (showTimeID, movieID, dayID, movieTitle, movieTime) => {
        this.setState({ room: { showTimeID, movieID, dayID, movieTitle, movieTime}})
    }

    getFullDay = (day) => {
        switch(day){
            case 'pt':
                return 'Piątek';
            case 'sob':
                return 'Sobota';
            case 'ndz':
                return 'Niedziela';
            case 'pon':
                return 'Poniedziałek';
            case 'wt':
                return 'Wtorek';
            case 'śr':
                return 'Środa';
            case 'czw':
                return 'Czwartek';
            default:
                return day;
        }
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
                                return <div className={`day ${day._id === this.state.currentDay ? "active": "" }`} key={day._id} onClick={() => this.handleSelectDay(day)}>{this.getFullDay(day.date)}</div>;
                        })}
                            <div className="arrow right"> &gt; </div>
                            <div className="calendar"><img src={require('../icons/kalendarz.svg')} className="calendarpic" alt="calendar"/> </div>
                        </div>
                        <div className="today">{`Dzisiaj mamy: ${this.state.today}, ${this.state.date}`}</div>
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
