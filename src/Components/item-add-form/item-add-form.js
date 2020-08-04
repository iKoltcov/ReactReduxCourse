import React, { Component } from 'react'

import './item-add-form.css'

export default class ItemAddForm extends Component {
    state = {
        text: '',
    };

    onChange = (event) => {
        this.setState({ text: event.target.value });
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onAdd(this.state.text);
    }

    render() {
        const { text } = this.state;

        let buttonClasses = 'btn btn-outline-secondary';
        if( !!!text ) {
            buttonClasses += ' disabled';
        }

        return (
            <form className='item-add-form d-flex' onSubmit={this.onSubmit}>
                <button className={buttonClasses}>Add task</button>
                <input type="text" className="form-control" value={text} onChange={this.onChange} />
            </form>
        );
    }
}