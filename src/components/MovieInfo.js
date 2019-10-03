import React from 'react';

export MovieInfo = props => {
    return (
        <div>
        <img src={props.image} className="filmImage"/>
        <h1 className="filmImage">{props.title}</h1>
        <p className="filmDescription">{props.description}</p>
        </div>
    );
}
