import React from 'react';

const AvailableShowtimes = props => {

     return props.showTimes.map(showTime => <button key={showTime._id}> {showTime.time} </button>);
}

export default AvailableShowtimes;

// import React from 'react';
// import axios from 'axios';

// class AvailableShowtimes extends React.Component {

//      state = {
//           time: [],
//           occupiedPlaces: []
//        }

//        componentDidMount() {
//           axios.get('https://cinemaapp2019.herokuapp.com/api/repertoires/5d8e684b46056b51e0b92408')
//               .then(res => {
//                   this.setState({ time: res.data.time, occupiedPlaces: res.data.occupiedPlaces  })
//               })
//               .catch(err => {
//                   console.log(err);
//               })
//       }

//       handleClick = (time) => {
//           this.setState({occupiedPlaces: time.occupiedPlaces})
//           console.log(time.occupiedPlaces)
//       }
     
//       render() {
//           return (this.props.showTimes.map(showTime => <button key={showTime._id} onClick={this.handleClick}> {showTime.time} </button>))
//       }
// }

// export default AvailableShowtimes