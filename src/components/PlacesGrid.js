import React from 'react';
import axios from 'axios';
import Place from './Place';
import './PlacesGrid.css';

class PlacesGrid extends React.Component {
    
    state = { occupiedPlaces: [{row: 0, sit: 0}]}
        

    getPlaces = async () => {
        const response = await axios.get(`https://cinemaapp2019.herokuapp.com/api/repertoires/${this.props.dayID}/${this.props.movieID}/${this.props.showTimeID}`);
       this.setState({occupiedPlaces: response.data});  
    }

    componentDidMount() {
        this.getPlaces();
    }

    getPlaceStatus = (row, sit) => {
        for(let i = 0; i < this.state.occupiedPlaces.length; i++){
            if(row === this.state.occupiedPlaces[i].row && sit === this.state.occupiedPlaces[i].sit)
                return 'occupied';
        }
        for(let i = 0; i < this.props.currentSelected.length; i++){
            if(row === this.props.currentSelected[i].row && sit === this.props.currentSelected[i].sit)
                return 'selected';
        }
        return 'available';
    }

    render() {
        let rows = new Array(this.props.rows);
        for(let i = 1; i <= this.props.rows; i++){
            rows[i] = new Array(this.props.sits);
            for(let j = 1; j <= this.props.sits; j++){
                rows[i][j] = {row: i, sit: j};
            }
        }

        // const gridStyle = {
        //     display : 'grid',
        //     gridTemplateColumns: 'repeat(15, 1fr)'
        // }

        const grid = rows.map((row) => row.map((sit) => <Place row={sit.row} sit={sit.sit} status={this.getPlaceStatus(sit.row, sit.sit)} handleClick={this.props.addSelected}/>));
        return(
            <div className='placesGrid'>
                {grid}
            </div>
        );
    }
}

export default PlacesGrid;

PlacesGrid.defaultProps = {
    dayID: '5d975e06d2909461ec215060',
    movieID: '5d975e06d2909461ec215069',
    showTimeID: '5d975e06d2909461ec21506e'
}