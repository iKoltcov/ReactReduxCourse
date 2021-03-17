import React, { Component } from 'react';
import withApiService from '../../utils/withApiService.js';

import { connect } from 'react-redux';
import { updateItems } from '../../actions';

import CardItem from '../card-item/card-item.js';

import { Grid } from 'semantic-ui-react';

class CardGrid extends Component {
    componentDidMount = () => {
        const { apiService, updateItems } = this.props;
        updateItems(apiService.getItems());
    }

    render() {
        const items = this.props.items.map((value) => 
            <Grid.Column width='4' key={value.id}>
                <CardItem data={value}/>
            </Grid.Column>
        );
        return <Grid centered stackable>{items}</Grid>;
    }
}

export default withApiService()(connect(state => ({ items: state.items }), { updateItems })(CardGrid))