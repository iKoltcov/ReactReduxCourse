import React, {Component} from 'react';
import Header from '../header/header';
import Search from '../search/search'
import TodoList from '../todo-list/todo-list';
import ItemFilter from '../item-filter/item-filter';

import './app.css';

export default class App extends Component {
    render() {
        const tasks = [ 
            {id: 1, value: "First task"}, 
            {id: 2, value: "Second task"}
        ];

        return (
            <React.StrictMode>
                <div className="todo-app">
                    <Header />
                    <div className="top-panel d-flex">
                        <Search />
                        <ItemFilter />
                    </div>
                    <TodoList items={ tasks } />
                </div>
            </React.StrictMode>
        );
    }
}