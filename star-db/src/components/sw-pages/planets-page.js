import React, { Component } from 'react'
import Row from '../row/row';
import { PlanetsList } from '../sw-components/sw-lists';
import PlanetPanel from '../sw-components/planet-panel';

export default class PlanetsPage extends Component {
    state = {
        selectedItem: null,
        selectedPage: 1,
    }

    onChoseItem = (selectedItem) => {
        this.setState({ selectedItem });
    };

    render() {
        return <Row
            left={<PlanetsList itemId={this.state.selectedPage} onChoseItem={this.onChoseItem} />}
            right={<PlanetPanel itemId={this.state.selectedItem} />} />
    }
}