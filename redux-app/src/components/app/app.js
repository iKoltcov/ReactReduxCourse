import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from '../header/header.js'
import CardBoard from '../card-board/card-board.js'

const App = () => {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path='/item/:id?' render={({match}) => `product ${match.params.id}`}/>
                    <Route path='/' component={({match}) => <CardBoard id={match.params.id} />}/>
                </Switch>
            </BrowserRouter>
        </React.StrictMode>
    );
}

export default App;