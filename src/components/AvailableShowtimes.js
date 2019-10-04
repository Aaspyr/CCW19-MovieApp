import React from 'react';

const AvailableShowtimes = props => {

     console.log(props)
     return props.showTimes.map(showTime => <button key={showTime._id}> {showTime.time} </button>);
}

export default AvailableShowtimes