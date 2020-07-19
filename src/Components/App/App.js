import React from 'react';
import Header from '../Header/Header';
import Search from '../Search/Search'
import TodoList from '../TodoList/TodoList';

export default class App extends React.Component {
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