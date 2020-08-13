import React, { Component } from 'react'

import './list-item.css';

export default class ListItem extends Component {
    render() {
        const items = this.props.items.map((item) => {
            return (<li className='list-group-item' key={item.id} onClick={() => this.props.onChoseItem(item.id)}>{item.name}</li>);
        });
        
        return (
            <div className='col-4'>
                <ul className='list-component list-group'>{items}</ul>
            </div>
        );
    }
}