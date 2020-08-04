import React, {Component} from 'react';
import Header from '../header/header';
import Search from '../search/search'
import TodoList from '../todo-list/todo-list';
import ItemFilter from '../item-filter/item-filter';
import ItemAddForm from '../item-add-form/item-add-form';

import './app.css';

export default class App extends Component {
    state = {
        tasks: [ 
            {id: 1, label: "First task", important: true}, 
            {id: 2, label: "Second task"}, 
            {id: 3, label: "Third task"},
        ],
    }

    deleteItem = (id) => {
        this.setState(({tasks}) => {
            const idx = tasks.findIndex((el) => el.id === id);
            return {
                tasks: [...tasks.slice(0, idx), ...tasks.slice(idx + 1)]
            }
        });
    };

    addItem = (taskLabel) => {
        if(!!taskLabel) {
            this.setState(({tasks}) => {
                const idx = 1 + tasks.reduce((max, task) => max < task.id ? task.id : max, 0);
                const newTask = {
                    id: idx,
                    label: taskLabel,
                };

                return { tasks: [ ...tasks, newTask ] };
            });    
        }
    }

    render() {
        const {tasks} = this.state;

        return (
            <React.StrictMode>
                <div className="todo-app">
                    <Header />
                    <div className="top-panel d-flex">
                        <Search />
                        <ItemFilter />
                    </div>
                    <TodoList 
                        items={ tasks }
                        onDeleted={ (id) => this.deleteItem(id) } />
                    <ItemAddForm onAdd={ (taskLabel) => this.addItem(taskLabel) } />
                </div>
            </React.StrictMode>
        );
    }
}