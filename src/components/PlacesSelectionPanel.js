import React from 'react';
import PlacesGrid from './PlacesGrid';
import './PlacesSelectionPanel.css';
import axios from 'axios';

const URL = 'https://cinemaapp2019.herokuapp.com/api';

class PlacesSelectionPanel extends React.Component {

    state = { selectedPlaces: [{row: 3, sit: 10}]};

    updateSelectedPlaces = (row, sit, status) => {
        const currentSelected = this.state.selectedPlaces;

        if(status === 'available') {
            const selectedPlace = {row: row, sit: sit};
            const newCurrentSelected = [...currentSelected, selectedPlace];

            this.setState({ selectedPlaces: newCurrentSelected});
        }else if(status === 'selected') {
            const newCurrentSelected = currentSelected.filter((place) => place.row !== row && place.sit !== sit);

            this.setState({ selectedPlaces: newCurrentSelected});
        }
    }

    handleReservationClick = props => {

    for (let i=1; i<=this.state.selectedPlaces.length; i++){
        //axios.put(`${URL}/repertoir/${props.id}/${props.movieId/:props.ShowTimeId`,{
        axios.put(`${URL}/repertoir/:5d8e684b46056b51e0b92408/:5d8e684b46056b51e0b92411/:5d8e684b46056b51e0b92416`,{
            
            "row": this.state.selectedPlace.row[i],
            "sit": this.state.selectedPlace.sit[i]
        })
        .then(r => console.log(r.status))
        .catch(e => console.log(e));
    }}

    render() {
        return (
        <div className = 'panel'>
           <div className = 'screen'>Ekran</div>
           <PlacesGrid rows={10} sits={15} currentSelected={this.state.selectedPlaces} addSelected={this.updateSelectedPlaces}/>
           <button className="reserveButton" onClick={this.handleReservationClick}>Zarezerwuj</button>
        </div>
        );
    }
}

export default PlacesSelectionPanel;