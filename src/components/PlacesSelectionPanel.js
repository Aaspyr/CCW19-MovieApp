import React from 'react';
import PlacesGrid from './PlacesGrid';
import './PlacesSelectionPanel.css';

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

    render() {
        return (
        <div className = 'panel'>
           <div className = 'screen'>Ekran</div>
           <PlacesGrid rows={10} sits={15} currentSelected={this.state.selectedPlaces} addSelected={this.updateSelectedPlaces}/>
           <button className="reserveButton">Zarezerwuj</button>
        </div>
    );
}
}

export default PlacesSelectionPanel