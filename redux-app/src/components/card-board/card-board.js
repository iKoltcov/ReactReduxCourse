import React, { Component } from 'react'
import { connect } from 'react-redux'
import withApiService from '../../utils/withApiService.js';
import { updateItems } from '../../actions';
import CardItem from '../card-item/card-item.js'
import './card-board.css';

class CardBoard extends Component {
    componentDidMount = () => {
        const { apiService, updateItems } = this.props;
        updateItems(apiService.getItems());
    }

    render() {
        const { items } = this.props;
        return (
            <div className='jumbotron-fluid card-deck card-board'>
                {items.map((value) => <CardItem data={value} key={value.id}/>)}
            </div>
        );
    }
}

export default withApiService()(connect(state => ({ items: state.items }), { updateItems })(CardBoard))