import React, { Component } from 'react'

import './list-item.css';

export default class ListItem extends Component {
    render() {
        const items = this.props.items.map((item) => {
            return (<button className='btn btn-outline-success item-button' 
                            key={item.id} 
                            onClick={() => this.props.onChoseItem(item.id)}>
                                {item.name}
                    </button>);
        });
        
        return (
            <div className='col-5 list-panel jumbotron'>
                {items}
            </div>
        );
    }
}