import React, { useState } from 'react';

import Header from '../header/header.js';
import { CharactersPage, PlanetsPage, StarshipsPage } from '../sw-pages';
import './app.css';

import SwapiService from '../../services/swapi-service.js';
import DummySwapiService from '../../services/dummy-swapi-service.js';
import SwapiServiceContext from '../../contexts/swapi-service-context.js';

const App = () => {
    const [ swapiService ] = useState(new DummySwapiService());

    return (
        <React.StrictMode>
            <SwapiServiceContext.Provider value={swapiService} >
                <div className='starwars-db-app'>
                    <Header />
                    <CharactersPage />
                    <PlanetsPage />
                    <StarshipsPage />
                </div>
            </SwapiServiceContext.Provider>
        </React.StrictMode>
    );
}

export default App;