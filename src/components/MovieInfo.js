import React from 'react';

export MovieInfo = props => {
    return (
        <div>
        <img className={"filmImage"}  src={props.image}/>
        <h1 className={"filmImage"}>{props.title}</h1>
        <p className={"filmDescription"}>{props.description}</p>
        </div>
    );
}
