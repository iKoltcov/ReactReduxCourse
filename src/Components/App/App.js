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
            {id: 2, label: "Second task", done: true}, 
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

    addItem = (label) => {
        if(!!label) {
            this.setState(({tasks}) => {
                const idx = 1 + tasks.reduce((max, task) => max < task.id ? task.id : max, 0);
                const newTask = {
                    id: idx,
                    label: label,
                };

                return { tasks: [ ...tasks, newTask ] };
            });    
        }
    }

    onToggleImportant = (id) => {
        this.setState(({tasks}) => {
            const idx = tasks.findIndex((el) => el.id === id);
            const task = {...tasks[idx], important: !tasks[idx].important};
            
            return {
                tasks: [...tasks.slice(0, idx), task, ...tasks.slice(idx + 1)]
            }
        });
    };

    onToggleDone = (id) => {
        this.setState(({tasks}) => {
            const idx = tasks.findIndex((el) => el.id === id);
            const task = {...tasks[idx], done: !tasks[idx].done};
            
            return {
                tasks: [...tasks.slice(0, idx), task, ...tasks.slice(idx + 1)]
            }
        });
    };

    render() {
        const {tasks} = this.state;
        const done = tasks.reduce((num, task) => {
            return task.done === true ? num + 1: num
        }, 0);
        const todo = tasks.length - done;

        return (
            <React.StrictMode>
                <div className="todo-app">
                    <Header todo={todo} done={done} />
                    <div className="top-panel d-flex">
                        <Search />
                        <ItemFilter />
                    </div>
                    <TodoList 
                        items={ tasks }
                        onDeleted={ this.deleteItem } 
                        onToggleDone={ this.onToggleDone }
                        onToggleImportant={ this.onToggleImportant } />
                    <ItemAddForm onAdd={ (label) => this.addItem(label) } />
                </div>
            </React.StrictMode>
        );
    }
}