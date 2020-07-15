import React from 'react'
import TodoListItem from './TodoListItem'

export default class TodoList extends React.Component {
    render()
    {
        const elements = this.props.items
            .map((item) => (<li><TodoListItem { ...item } /></li>));

        return (<ul>{ elements }</ul>);
    }
}