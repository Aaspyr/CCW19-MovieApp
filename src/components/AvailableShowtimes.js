import React from 'react';
import './AvailableShowtimes.css';

const AvailableShowtimes = props => {
     return props.showTimes.map(showTime => <button className="time" key={showTime._id} onClick={() => props.selectSale(showTime._id, props.movieID, props.dayID, props.movieTitle, showTime.time)}> {showTime.time} </button>);
}

export default AvailableShowtimes;
