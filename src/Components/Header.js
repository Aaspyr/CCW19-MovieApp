import React from 'react';
import "./Header.css"

class Header extends React.Component {
    render() {
        return (<>
            <div className="logo" >
                <h1>Kin<img src="logo.svg" />Daria</h1><h2>Repertuar</h2></div>
        </>);

    }
}

export default Header