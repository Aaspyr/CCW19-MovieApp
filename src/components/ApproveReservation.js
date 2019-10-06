import React from 'react';
import './ApproveReservation.css'

const ApproveReservation = (props) => {
    return (
    <div className="approve__item">
        <p className="approve__text">{`Dziękujemy za złożenie zamówienia. ${props.selected.map(sit => {
        return sit.row}).sort((a,b) => a-b).filter(( item, idx, arr ) => arr.indexOf( item ) === idx )} rząd. ${props.selected.map(sit => {
            return sit.sit}).sort((a,b) => a-b)} miejsce.`}
        </p>
    </div>
    );
}

export default ApproveReservation;
