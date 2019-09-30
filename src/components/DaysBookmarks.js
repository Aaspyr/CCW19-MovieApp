import React from 'react';
import {Movie} from './Movie';
import axios from 'axios';


class DaysBookmarks extends React.Component {
    state = {
        rep: []
    }
    componentDidMount() {
        axios.get('https://cinemaapp2019.herokuapp.com/api/repertoires')
            .then(res => {
                console.log(res.data);
                
                const rep = res.data;
                this.setState({rep});
            })  
    }

    render() {
        return (
            <Movie rep={this.state.rep}/>
        )
    }
}

export default DaysBookmarks;
