import React from 'react';
import './Place.css';

class Place extends React.Component{


    setStyle() {
        if(this.props.status === 'occupied')
            return 'placeOccupied';
        else if(this.props.status === 'selected')
            return 'placeSelected';
        else return 'placeAvailable';
    }

   

    render() {            
        return (
            <div className={this.setStyle()} onClick={() => this.props.handleClick(this.props.row,this.props.sit, this.props.status)}>{this.props.sit} </div>
        );
    }
}

export default Place;
