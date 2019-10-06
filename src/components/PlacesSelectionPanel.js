import React from 'react';
import PlacesGrid from './PlacesGrid';
import './PlacesSelectionPanel.css';
import ApproveReservation from './ApproveReservation';
import axios from 'axios';

const URL = 'https://cinemaapp2019.herokuapp.com/api';

class PlacesSelectionPanel extends React.Component {

    state = { selectedPlaces: [{row: 3, sit: 10}], approve: false };

    updateSelectedPlaces = (row, sit, status) => {
        const currentSelected = this.state.selectedPlaces;

        if(status === 'available' && this.state.selectedPlaces.length < 5) {
            const selectedPlace = {row: row, sit: sit};
            const newCurrentSelected = [...currentSelected, selectedPlace];

            this.setState({ selectedPlaces: newCurrentSelected});
        } else if(status === 'selected') {
            const newCurrentSelected = currentSelected.filter((place) => place.row !== row || place.sit !== sit);

            this.setState({ selectedPlaces: newCurrentSelected});
        } 
    }
    approve = props => {
        this.setState({
            approve: !this.state.approve
        })
        for (let i=1; i<=this.state.selectedPlaces.length; i++){
            axios.put(`${URL}/repertoir/${props.id}/${props.movie}/${props.showTime}`,{
    
                "row": this.state.selectedPlace.row[i],
                "sit": this.state.selectedPlace.sit[i]
            })
            .then(r => console.log(r.status))
            .catch(e => console.log(e));
        }
    }

    render() 
    {
        if(this.state.approve) {
                return <ApproveReservation selected={this.state.selectedPlaces}/>
        }
        return (
        <div className = 'panel'>
           <div className = 'screen'>Ekran</div>
           <PlacesGrid rows={10} sits={15} currentSelected={this.state.selectedPlaces} addSelected={this.updateSelectedPlaces}/>
           <button className="reserveButton" onClick={this.approve}>Zarezerwuj</button>
        </div>
        );
    }
}
export default PlacesSelectionPanel;
