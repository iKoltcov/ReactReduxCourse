import React, {Component} from 'react'

import './todo-list-item.css'

export default class TodoListItem extends Component {
    render()
    {
        return (
            <span className="todo-list-item">
                {this.props.value}
            </span>
        );
    }
}