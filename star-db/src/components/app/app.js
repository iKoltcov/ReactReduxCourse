import React, { Component } from 'react';
import SwapiClient from '../../clients/swapiClient';
import Header from '../header/header';

import './app.css'
import ListItem from '../list-item/list-item';
import CharacterPanel from '../character-panel/character-panel';

export default class App extends Component {
    items = [
        'First item',
        'Second item',
        'Third item',
    ];

    render() {
        return (
            <React.StrictMode>
                <div className='starwars-db-app'>
                    <Header />
                    <div className='d-flex'>
                        <ListItem items={this.items}/>
                        <CharacterPanel />
                    </div>
                </div>
            </React.StrictMode>
        );
    }
}