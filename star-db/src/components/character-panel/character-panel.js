import React, { Component } from 'react';
import SwapiService from '../../service/swapi-service';

import './character-panel.css';

export default class CharacterPanel extends Component {
    state = {
        character: null,
    }
    
    service = new SwapiService();

    componentDidMount() {
        this.updateCharacter();
    }

    componentDidUpdate(prevProps) {
        if(this.props.itemId !== prevProps.itemId){
            this.updateCharacter();
        }
    }

    updateCharacter() {
        this.service
            .getCharacter(this.props.itemId)
            .then((result) => {
                this.setState({
                    character: result,
                })
            });
    }

    render() {
        const { character = null } = this.state;
        return (
            <div className='jumbotron character-panel'>
                {!!character ? <CharacterView character={character}/> : null}        
            </div>
        );
    }
};

const CharacterView = (props) => {
    const { character } = props;
    return (
        <table className='table'>
            <tbody>
                <tr>
                    <th>Name</th>
                    <td>{character.name}</td>
                </tr>
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
    );
};