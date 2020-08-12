import React, { Component } from 'react';

import './header.css';

export default class Header extends Component {
    render() {
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
}