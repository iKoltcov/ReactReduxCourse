import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from '../../store';

import { ApiServiceProvider } from '../api-service-context';
import ApiService from '../../services/apiService';

import Header from '../header/header.js'
import CardGrid from '../card-grid/card-grid.js'
import Cart from "../cart/cart.js";

const apiService = new ApiService();

const App = () => {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <ApiServiceProvider value={apiService}>
                    <BrowserRouter>
                        <Header />
                        <Switch>
                            <Route path='/cart' component={() => <Cart />} />
                            <Route path='/' component={({match}) => <CardGrid id={match.params.id} />}/>
                        </Switch>
                    </BrowserRouter>
                </ApiServiceProvider>
            </Provider>
        </React.StrictMode>
    );
}

export default App;