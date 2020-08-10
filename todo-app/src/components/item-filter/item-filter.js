import React, {Component} from 'react';

import './item-filter.css';

export default class ItemFilter extends Component {    
    setFilter(filter) {
        if(filter === 'all' || filter === 'active' || filter === 'done') {
            this.props.onChangeFilter(filter);
        }
    }

    buttons = [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'done', label: 'Done' },
    ];

    render(){
        const { filter } = this.props;

        const buttons = this.buttons.map( ({name, label}) => {
            const classes = filter === name ? "btn btn-info" : "btn btn-outline-secondary";
            return (
                <button 
                    type="button" 
                    key={name}
                    className={classes} 
                    onClick={() => this.setFilter(name)}>
                        {label}
                </button>
            );
        });

        return (
            <div className="btn-group">{buttons}</div>
        );
    }
}