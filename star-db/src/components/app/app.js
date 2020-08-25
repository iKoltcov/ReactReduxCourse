import React, { Component } from 'react';
import SwapiService from '../../service/swapi-service.js';
import Header from '../header/header';
import ListItem from '../list-item/list-item';
import CharacterPanel from '../character-panel/character-panel.js';

import './app.css'

export default class App extends Component {
    state = {
        itemId: 1,   
        page: 1,
    };

    service = new SwapiService();

    onChoseItem = (itemId) => {
        this.setState({ itemId });
    };

    render() {
        return (
            <React.StrictMode>
                <div className='starwars-db-app'>
                    <Header />
                    <div className='container'>
                        <div className='row'>
                            <ListItem getData={this.service.getCharacters} page={this.state.page} onChoseItem={this.onChoseItem}/>
                            <CharacterPanel itemId={this.state.itemId}/>
                        </div>
                    </div>
                </div>
            </React.StrictMode>
        );
    }
}