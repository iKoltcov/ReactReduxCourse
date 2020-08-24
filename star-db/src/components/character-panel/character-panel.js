import React, { Component } from 'react';
import SwapiService from '../../service/swapi-service';
import Spinner from '../spinner/spinner.js'
import CharacterView from './character-view.js';

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

        if(isLoading)
        {
            return <Spinner />;
        }

        return(
            <div className='col-8 jumbotron character-panel'>
                {!!character 
                    ? (<CharacterView character={character}/>) 
                    : null}
            </div>
        );
    }
};