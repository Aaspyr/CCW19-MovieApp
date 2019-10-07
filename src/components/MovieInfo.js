import React from 'react';
import './MovieInfo.css';

const MovieInfo = props => {
    return (
        <>
            <div className="pic"><img src={props.image} className="filmImage" alt="filmImage"/></div>
            <div className="txt">
            <h1 className="filmHeader">{props.title}</h1>
            <p className="filmDescription">{props.description}</p>
            </div>
        </>
    );
}

export default MovieInfo;
