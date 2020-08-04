import React, {Component} from 'react';

import './header.css'

export default class Header extends Component {
    render(){
        const { todo, done } = this.props;

        return (
            <div className='header'>
                <h1>Todo app!</h1>
                <span>{todo} to do. {done} done</span>
            </div>
        );
    }
}