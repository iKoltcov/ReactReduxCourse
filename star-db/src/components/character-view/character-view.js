import React from 'react'

import './character-view.css';

const CharacterView = ({character}) => {
    return (
        <React.Fragment>
            <div className='item-details'>
                <img src={character.imageUrl} className='character-image'/>
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
            </div>
        </React.Fragment>
    );
};

export default CharacterView;