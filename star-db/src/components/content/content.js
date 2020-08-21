import React, { Component } from 'react'
import CharacterPanel from '../character-panel/character-panel.js'

import './content.css'

export default class Content extends Component {
    render() {
        return (
            <div className='col-8 jumbotron content-panel'>
                <CharacterPanel itemId={this.props.itemId} />
            </div>
        );
    }
}