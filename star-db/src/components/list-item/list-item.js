import React, { Component } from 'react'

import './list-item.css';

export default class ListItem extends Component {
    render() {
        const items = this.props.items.map((item) => {
            return (<li className='list-group-item'>{item}</li>);
        });
        
        return (<ul className='list-component list-group'>{items}</ul>);
    }
}