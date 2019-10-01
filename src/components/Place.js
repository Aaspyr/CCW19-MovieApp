import React from 'react';

class Place extends React.Component{


    setStyle() {
        if(this.props.status === 'occupied')
            return { color : 'red'};
        else return { color : 'black'};
    }

    handleClick() {
        console.log(this.props.row, this.props.sit);
    }

    render() {            
        return (
            <div style={this.setStyle()} onClick={() => this.handleClick()}>{this.props.sit} </div>
        );
    }
}

export default Place;