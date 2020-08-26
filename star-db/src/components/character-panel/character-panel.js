import React, { Component } from 'react';

import SwapiService from '../../service/swapi-service';
import Spinner from '../spinner/spinner.js'
import CharacterView from '../character-view/character-view.js';
import ErrorBoundary from '../error-boundary/error-boundary.js';

import './character-panel.css';

export default class CharacterPanel extends Component {
    state = {
        character: null,
        isLoading: true,
    }
    
    service = new SwapiService();

    componentDidMount() {
        this.updateCharacter();
    }

    componentDidUpdate(prevProps) {
        if(this.props.itemId !== prevProps.itemId){
            this.setState({ isLoading: true });
            this.updateCharacter();
        }
    }

    updateCharacter() {
        this.service
            .getCharacter(this.props.itemId)
            .then((result) => {
                this.setState({ 
                    character: result,
                    isLoading: false,
                });
            });
    }

    render() {
        const { isLoading, character = null } = this.state;
        let content = <Spinner />;

        if(!isLoading)
        {
            content = !!character ? (<CharacterView character={character}/>) : null;
        }

        return(
            <div className='jumbotron character-panel'>
                <ErrorBoundary>{content}</ErrorBoundary>
            </div>
        );
    }
};