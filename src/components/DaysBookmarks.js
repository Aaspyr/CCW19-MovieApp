import React from 'react';
import {Movie} from './Movie';
import * as data from './przyklad.json';

const {name} = data;

class DaysBookmarks extends React.Component {
    render(){
        return (
            <Movie/>
        )
    }
}

export default DaysBookmarks;
