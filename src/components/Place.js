import React from 'react';

class Place extends React.Component{


    setStyle() {
        if(this.props.status === 'occupied')
            return { color : 'red'};
        else if(this.props.status === 'selected')
            return { color : 'green'};
        else return { color : 'black'};
    }

   

    render() {            
        return (
            <div style={this.setStyle()} onClick={() => this.props.handleClick(this.props.row,this.props.sit, this.props.status)}>{this.props.sit} </div>
        );
    }
}

export default Place;