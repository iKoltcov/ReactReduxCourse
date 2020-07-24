import React, {Component} from 'react'

import './todo-list-item.css'

export default class TodoListItem extends Component {
    state = {
        done: this.props.done,
        important: this.props.important,
    };

    onDoneClick = () => {
        this.setState({
            done: !this.state.done,
        });
    };

    onImportantClick = () => {
        this.setState({
            important: !this.state.important,
        });
    };
    
    render()
    {
        const { label } = this.props;
        const { done, important } = this.state;

        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal',
        };

        let classNames = 'todo-list-item';
        if(done) classNames += ' done';

        return (
            <span className={classNames}>
                <span className='todo-list-item-label' style={style}>
                    {label}
                </span>

                <button 
                    type="button" 
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick={this.onDoneClick}>
                    <i className="fa fa-trash-o" />
                </button>

                <button 
                    type="button" 
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={this.onImportantClick}>
                    <i className="fa fa-exclamation" />
                </button>
            </span>
        );
    }
}