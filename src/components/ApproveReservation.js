import React from 'react';

const ApproveReservation = (props) => {
    return (
    <div>{`Dziękujemy za złożenie zamówienia. ${props.selected.map(sit => {
        return sit.row}).sort((a,b) => a-b).filter(( item, idx, arr ) => arr.indexOf( item ) === idx )} rząd. ${props.selected.map(sit => {
            return sit.sit}).sort((a,b) => a-b)} miejsce.`}
    </div>
    );
}

export default ApproveReservation;