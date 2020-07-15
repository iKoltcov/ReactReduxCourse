import React from 'react'

export default class TodoListItem extends React.Component {
    render()
    {
        return <span>{this.props.value}</span>
    }
}