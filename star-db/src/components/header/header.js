import React  from 'react';

import './header.css';

const Header = () => {
    return (
        <div className="header-component d-flex">
            <h1>StarWars DB</h1>
            <div className='route-panel'>
                <button className='btn btn-link'>Characters</button>
                <button className='btn btn-link'>Starships</button>
                <button className='btn btn-link'>Planets</button>
            </div>
        </div>
    );
}

export default Header;