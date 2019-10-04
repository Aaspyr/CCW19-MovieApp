import React from 'react';

const MovieInfo = props => {
    return (
        <div>
            <img src={props.image} className="filmImage" alt=""/>
            <h1 className="filmImage">{props.title}</h1>
            <p className="filmDescription">{props.description}</p>
        </div>
    );
}

export default MovieInfo