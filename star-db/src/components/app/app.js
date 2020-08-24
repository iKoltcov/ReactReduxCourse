import React, { Component } from 'react';
import SwapiService from '../../service/swapi-service.js';
import Header from '../header/header';
import ListItem from '../list-item/list-item';
import CharacterPanel from '../character-panel/character-panel.js';

import './app.css'

export default class App extends Component {
    state = {
        itemId: 1,        
        list: {
            items: [],
            page: 1,
            route: 'characters',
        },
    };

    service = new SwapiService();

    componentDidMount(){
        this.updateList();
    }

    updateList() {
        const { list } = this.state;
        switch(list.route){
            case 'characters':
                this.service.getCharacters()
                    .then((results) => {
                        const items = results.map( (item) => ({ id: item.id, name: item.name }));
                        this.setState({ list: { items } });
                    });
                break;
            default:
                break;
        }
    }

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
                            <ListItem items={this.state.list.items} onChoseItem={this.onChoseItem}/>
                            <CharacterPanel itemId={this.state.itemId}/>
                        </div>
                    </div>
                </div>
            </React.StrictMode>
        );
    }
}