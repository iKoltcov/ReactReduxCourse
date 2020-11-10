import React  from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
    return (
        <div className="header-component d-flex">
            <h1>
                <Link to='/'>StarWars DB</Link>
            </h1>
            <div className='route-panel'>
                <Link className='btn btn-link' to='/characters'>Characters</Link>
                <Link className='btn btn-link' to='/starships'>Starships</Link>
                <Link className='btn btn-link' to='/planets'>Planets</Link>
            </div>
        </div>
    );
}

export default Header;