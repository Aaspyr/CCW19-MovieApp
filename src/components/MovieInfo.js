import React from 'react';

export class MovieInfo extends React.Component {
    render() {
        return (
            <div>{this.props.title}</div>
        )
    }
}