import React, {Component} from 'react'
import TodoListItem from '../todo-list-item/todo-list-item'

import './todo-list.css'

export default class TodoList extends Component {
    render()
    {
        const { items, onDeleted, onToggleImportant, onToggleDone } = this.props;

        const elements = items
            .map((item) => {
                const { id, ...itemProps } = item;
                return (
                    <li key={id} className='list-group-item todo-list-group-item'>
                        <TodoListItem 
                            { ...itemProps }
                            onDeleted={() => onDeleted(id)}
                            onToggleImportant={() => onToggleImportant(id)}
                            onToggleDone={() => onToggleDone(id)} />
                    </li>
                )
            });

        return (<ul className="list-group">{ elements }</ul>);
    }
}