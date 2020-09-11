import React, { Component } from 'react';

import Header from '../header/header.js';
import { CharactersPage, PlanetsPage, StarshipsPage } from '../sw-pages';
import './app.css';

import SwapiService from '../../services/swapi-service.js';
import { SwapiServiceProvider } from '../../contexts/swapi-service-context.js';

export default class App extends Component {
    state = {
        swapiService: new SwapiService()
    }

    render() {
        return (
            <React.StrictMode>
                <SwapiServiceProvider value={this.state.swapiService} >
                    <div className='starwars-db-app'>
                        <Header />
                        <CharactersPage />
                        <PlanetsPage />
                        <StarshipsPage />
                    </div>
                </SwapiServiceProvider>
            </React.StrictMode>
        );
    }
}