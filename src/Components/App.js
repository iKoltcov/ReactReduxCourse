import React from 'react';
import Header from './Header';
import Search from './Search'
import TodoList from './TodoList';

export default class App extends React.Component {
    render() {
        const tasks = [ 
            {value: "First task"}, 
            {value: "Second task"}
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