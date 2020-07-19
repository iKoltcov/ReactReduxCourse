import React, {Component} from 'react'

export default class TodoListItem extends Component {
    render()
    {
        return <span>{this.props.value}</span>
    }
}