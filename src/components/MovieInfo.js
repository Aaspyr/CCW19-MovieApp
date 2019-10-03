import React from 'react';

export const MovieInfo = props => {
    return (
        <div className="moviebox">
            <div className="pic"><img src={props.image} className="shrooms"/></div>
            <div className="txt">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>
        </div>
    );
}
