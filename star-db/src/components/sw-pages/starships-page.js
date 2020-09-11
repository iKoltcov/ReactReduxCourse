import React, { Component } from 'react'
import Row from '../row/row';
import { StarshipsList } from '../sw-components/sw-lists';
import StarshipPanel from '../sw-components/starship-panel';

export default class StarshipsPage extends Component {
    state = {
        selectedItem: null,
        selectedPage: 1,
    }

    onChoseItem = (selectedItem) => {
        this.setState({ selectedItem });
    };

    render() {
        return <Row
            left={<StarshipsList itemId={this.state.selectedPage} onChoseItem={this.onChoseItem} />}
            right={<StarshipPanel itemId={this.state.selectedItem} />} />
    }
}