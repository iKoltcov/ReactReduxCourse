import React, { Component } from 'react'
import CharacterPanel from '../character-panel/character-panel.js'

export default class Content extends Component {
    render() {
        return (
            <div className='col-8'>
                <CharacterPanel itemId={this.props.itemId}/>
            </div>
        );
    }
}