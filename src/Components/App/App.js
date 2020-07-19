import React, {Component} from 'react';
import Header from '../header/Header';
import Search from '../search/Search'
import TodoList from '../todoList/TodoList';

export default class App extends Component {
    render() {
        const tasks = [ 
            {id: 1, value: "First task"}, 
            {id: 2, value: "Second task"}
        ];

        return (
            <React.StrictMode>
                <Header />
                <Search />
                <TodoList items={ tasks } />
            </React.StrictMode>
        );
    }
}