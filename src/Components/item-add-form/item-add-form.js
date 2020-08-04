import React, { Component } from 'react'

import './item-add-form.css'

export default class ItemAddForm extends Component {
    state = {
        text: ''
    };

    onChange = (event) => {
        this.setState(
            {
                text: event.target.value
            }
        );
    };

    render() {
        const { onAdd } = this.props;
        const { text } = this.state;

        let buttonClasses = 'btn btn-outline-secondary';
        if( !!!text ) {
            buttonClasses += ' disabled';
        }

        return (
            <div className='item-add-form d-flex'>
                <button className={buttonClasses} onClick={() => onAdd(text)}>Add task</button>
                <input type="text" className="form-control" value={text} onChange={this.onChange} />
            </div>
        );
    }
}