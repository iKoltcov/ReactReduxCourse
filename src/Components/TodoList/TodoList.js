import React, {Component} from 'react'
import TodoListItem from '../todoListItem/TodoListItem'

export default class TodoList extends Component {
    render()
    {
        const elements = this.props.items
            .map((item) => {
                const { id, ...itemProps } = item;
                return (
                    <li key={id} className="list-group-item">
                        <TodoListItem { ...itemProps } />
                    </li>
                )
            });

        return (<ul className="list-group">{ elements }</ul>);
    }
}