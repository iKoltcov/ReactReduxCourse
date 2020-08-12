import React, { Component } from 'react';
import SwapiClient from '../../clients/swapiClient';
import Header from '../header/header';

export default class App extends Component {
    render() {
        return (
            <React.StrictMode>
                <Header />
            </React.StrictMode>
        );
    }
}