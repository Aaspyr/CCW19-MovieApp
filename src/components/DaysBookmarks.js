import React from 'react';
import Movie from './Movie';
import axios from 'axios';
import PlacesSelectionPanel from './PlacesSelectionPanel';
import './DaysBookmarks.css';

class DaysBookmarks extends React.Component {
    state = {
       repertoire: [],
       currentMovies: [],
       sale: []
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

    handleSelectDay = (day) => {
        this.setState({currentMovies: day.movies})
    }

    handleSelectSale = (e) => {
        console.log(e)
    }

    render() {
        
        return (
            <>

            {/* <PlacesSelectionPanel /> */}

            <div className="container">
                <div className="navbar">
                    <div className="logo"><div className="kin"> KIN <div className="tape">
                    <img src={require('../icons/logo.svg') } className="tapepic" alt="logo"/></div></div> DARIA </div>
                    <div className="rep"> REPERTUAR </div>
                </div>
                <div className="content">
                    <div className="daybar">
                        <div className="arrow left"> &lt; </div>
                        {this.state.repertoire.map( day => {
                        return <div className="day" key={day._id} onClick={() => this.handleClick(day)}>{day.date}</div>;
                    })}
                        <div className="arrow right"> &gt; </div>
                        <div className="calendar"><img src={require('../icons/kalendarz.svg')} className="calendarpic" alt="calendar"/> </div>
                    </div>
                    <div className="today">Today</div>
                    <div className="feed">
                        {this.state.currentMovies.map(movie => {
                    return <Movie {...movie} key={movie._id} selectSale={this.handleSelectSale}/>
                        })}  
                    </div>
                </div>
            </div>   
            </>
            
        )
    }
}

export default DaysBookmarks;
