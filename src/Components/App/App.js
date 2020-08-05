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
        filter: 'all',
        searchText: ''
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

    onToggleProperty = (id, propName) => {
        this.setState(({tasks}) => {
            const idx = tasks.findIndex((el) => el.id === id);
            const task = {...tasks[idx], [propName]: !tasks[idx][propName]};
            
            return {
                tasks: [...tasks.slice(0, idx), task, ...tasks.slice(idx + 1)]
            }
        });
    }

    onToggleImportant = (id) => {
        this.onToggleProperty(id, 'important');
    };

    onToggleDone = (id) => {
        this.onToggleProperty(id, 'done');
    };

    onChangeFilter = (filter) => {
        this.setState({filter});
    }

    onChangeSearchText = (searchText) => {
        console.log(searchText);
        this.setState({searchText});
    }

    tasksFilter = (tasks) => {
        return tasks.filter( (task) => {
            const {filter, searchText} = this.state;
            let result = false;

            if(filter === 'all')
            {
                result = true;
            }
            else
            if(filter === 'done' && task.done)
            {
                result = true;
            }
            else
            if(filter === 'active' && !task.done)
            {
                result = true;
            }

            if(result && !!searchText){
                result = task.label.search(new RegExp(searchText, 'i')) !== -1;
            }

            return result;
        });
    }

    render() {
        const {tasks, filter} = this.state;
        const done = tasks.reduce((num, task) => {
            return task.done === true ? num + 1: num
        }, 0);
        const todo = tasks.length - done;

        return (
            <React.StrictMode>
                <div className="todo-app">
                    <Header todo={todo} done={done} />
                    <div className="top-panel d-flex">
                        <Search onChangeSearchText={this.onChangeSearchText}/>
                        <ItemFilter onChangeFilter={this.onChangeFilter} filter={filter} />
                    </div>
                    <TodoList 
                        items={ this.tasksFilter(tasks) }
                        onDeleted={ this.deleteItem } 
                        onToggleDone={ this.onToggleDone }
                        onToggleImportant={ this.onToggleImportant } />
                    <ItemAddForm onAdd={ (label) => this.addItem(label) } />
                </div>
            </React.StrictMode>
        );
    }
}