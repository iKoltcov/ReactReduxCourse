import React from 'react'

const CharacterView = ({character}) => {
    return (<React.Fragment>
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
    </React.Fragment>);
};

export default CharacterView;