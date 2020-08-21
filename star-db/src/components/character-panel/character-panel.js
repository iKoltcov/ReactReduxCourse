import React, { Component } from 'react';
import SwapiService from '../../service/swapi-service';
import Spinner from '../spinner/spinner.js'

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
            <React.Fragment>
                {!!character ? (<CharacterView character={character}/>) : null}
            </React.Fragment>
        );
    }
};

const CharacterView = (props) => {
    const { character } = props;
    return (
        <React.Fragment>
            <h4>{character.name}</h4>
            <table className='table'>
                <tbody>
                    <tr>
                        <th>Gender</th>
                        <td>{character.gender}</td>
                    </tr>
                    <tr>
                        <th>Birth Year</th>
                        <td>{character.birthYear}</td>
                    </tr>
                    <tr>
                        <th>Height</th>
                        <td>{character.height}</td>
                    </tr>
                    <tr>
                        <th>Mass</th>
                        <td>{character.mass}</td>
                    </tr>
                    <tr>
                        <th>Eye Color</th>
                        <td>{character.eyeColor}</td>
                    </tr>
                    <tr>
                        <th>Hair Color</th>
                        <td>{character.hairColor}</td>
                    </tr>
                </tbody>
            </table>
        </React.Fragment>
    );
};