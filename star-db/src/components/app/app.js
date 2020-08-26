import React, { Component } from 'react';
import SwapiService from '../../service/swapi-service.js';
import Header from '../header/header';
import ListItem from '../list-item/list-item';
import CharacterPanel from '../character-panel/character-panel.js';
import Row from '../row/row.js';

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
        const listItem = <ListItem 
            getData={this.service.getCharacters} 
            page={this.state.page} 
            onChoseItem={this.onChoseItem}/>
        
        const contentPanel = <CharacterPanel 
            itemId={this.state.itemId}/>;

        return (
            <React.StrictMode>
                <div className='starwars-db-app'>
                    <Header />
                    <Row left={listItem} right={contentPanel} />
                </div>
            </React.StrictMode>
        );
    }
}