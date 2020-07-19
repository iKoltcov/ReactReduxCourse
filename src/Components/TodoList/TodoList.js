import React from 'react'
import TodoListItem from '../TodoListItem/TodoListItem'

export default class TodoList extends React.Component {
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