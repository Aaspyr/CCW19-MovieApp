import React from 'react';
import './AvailableShowtimes.css';

const AvailableShowtimes = props => {
     return props.showTimes.map(showTime => <button className="time" key={showTime._id}> {showTime.time} </button>);
}

export default AvailableShowtimes;
