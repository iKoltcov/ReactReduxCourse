import React, { Component } from 'react';

import Header from '../header/header.js';
import Row from '../row/row.js';

import './app.css';
import CharacterPanel from '../sw-components/character-panel.js';
import PlanetPanel from '../sw-components/planet-panel.js';
import StarshipPanel from '../sw-components/starship-panel.js';
import { CharactersList, PlanetsList, StarshipsList } from '../sw-components/sw-lists.js';

export default class App extends Component {
    state = {
        itemId: 1,
        page: 1
    };

    onChoseItem = (itemId) => {
        this.setState({ itemId });
    };

    render() {
        const rows = [
            [
                <CharactersList itemId={this.state.page} onChoseItem={this.onChoseItem} />,
                <CharacterPanel itemId={this.state.itemId} />
            ],
            [
                <PlanetsList itemId={this.state.page} onChoseItem={this.onChoseItem} />,
                <PlanetPanel itemId={this.state.itemId} />
            ],
            [
                <StarshipsList itemId={this.state.page} onChoseItem={this.onChoseItem} />,
                <StarshipPanel itemId={this.state.itemId} />
            ]
        ];

        return (
            <React.StrictMode>
                <div className='starwars-db-app'>
                    <Header />
                    <Row left={rows[0][0]} right={rows[0][1]} />
                    {/*<Row left={rows[1][0]} right={rows[1][1]} />*/}
                    {/*<Row left={rows[2][0]} right={rows[2][1]} />*/}
                </div>
            </React.StrictMode>
        );
    }
}