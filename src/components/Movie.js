import React from 'react';

export Movie = props => {
    return (
            <div>
            <MovieInfo id={props.id} title={props.title} image={props.posterUrl} description={props.description}></MovieInfo>
            <AvailableShowtimes time={this.props.time}></AvailableShowtimes>
            </div>
        );
}

