import React, { useState } from 'react';

import Header from '../header/header.js';
import { CharactersPage, PlanetsPage, StarshipsPage } from '../sw-pages';
import './app.css';

import { BrowserRouter, Route } from 'react-router-dom';

import SwapiService from '../../services/swapi-service.js';
import SwapiServiceContext from '../../contexts/swapi-service-context.js';

const App = () => {
    const [ swapiService ] = useState(new SwapiService());

    return (
        <React.StrictMode>
            <SwapiServiceContext.Provider value={swapiService} >
                <BrowserRouter>
                    <div className='starwars-db-app'>
                        <Header />
                        <Route path='/characters/:id?' render={({match}) => <CharactersPage itemId={match.params.id}/>} />
                        <Route path='/planets/:id?' render={({match}) => <PlanetsPage itemId={match.params.id}/>} />
                        <Route path='/starships/:id?' render={({match}) => <StarshipsPage itemId={match.params.id}/>} />
                    </div>
                </BrowserRouter>
            </SwapiServiceContext.Provider>
        </React.StrictMode>
    );
}

export default App;