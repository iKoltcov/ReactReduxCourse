import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from '../../store';

import { ApiServiceProvider } from '../api-service-context';
import ApiService from '../../services/apiService';

import Header from '../header/header.js'
import CardBoard from '../card-board/card-board.js'

const apiService = new ApiService();

const App = () => {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <ApiServiceProvider value={apiService}>
                    <BrowserRouter>
                        <Header />
                        <Switch>
                            <Route path='/item/:id?' render={({match}) => `product ${match.params.id}`}/>
                            <Route path='/' component={({match}) => <CardBoard id={match.params.id} />}/>
                        </Switch>
                    </BrowserRouter>
                </ApiServiceProvider>
            </Provider>
        </React.StrictMode>
    );
}

export default App;