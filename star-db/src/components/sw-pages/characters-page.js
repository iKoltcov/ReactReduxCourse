import React, { Component } from 'react'
import Row from '../row/row';
import { CharactersList } from '../sw-components/sw-lists';
import CharacterPanel from '../sw-components/character-panel';

export default class CharactersPage extends Component {
    state = {
        selectedItem: null,
        selectedPage: 1,
    }

    onChoseItem = (selectedItem) => {
        this.setState({ selectedItem });
    };

    render() {
        return <Row
            left={<CharactersList itemId={this.state.selectedPage} onChoseItem={this.onChoseItem} />}
            right={<CharacterPanel itemId={this.state.selectedItem} />} />
    }
}