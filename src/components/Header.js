import React from 'react'

const Header = () => {
    return <div className="navbar">
        <div className="logo"><div className="kin"> KIN <div className="tape">
            <img src={require('../icons/logo.svg')} className="tapepic" alt="logo" /></div></div> DARIA </div>
        <div className="rep"> REPERTUAR </div>
    </div>
}

 export default Header