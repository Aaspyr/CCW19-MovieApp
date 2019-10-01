import React from 'react';
import PlacesGrid from './PlacesGrid';

class PlacesSelectionPanel extends React.Component {
    render() {
        return (
        <div>
           <div>Ekran</div>
           <PlacesGrid rows={10} sits={15}/>
        </div>
        );
    }
}

export default PlacesSelectionPanel;