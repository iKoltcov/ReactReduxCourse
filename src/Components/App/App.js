import React, {Component} from 'react';
import Header from '../header/header';
import SearchPanel from '../search/search-panel'
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
        this.setState({searchText});
    }

    tasksSearch = (tasks, searchText) => {
        if(!!searchText)
        {
            const loweredSearchText = searchText.toLowerCase();

            return tasks.filter(
                (task) => task.label.toLowerCase().indexOf(loweredSearchText) > -1);
        }

        return tasks;
    }

    tasksFilter = (tasks, filter) => {
        switch(filter)
        {
            case 'all':
                return tasks;   
            case 'done':
                return tasks.filter((task) => task.done);
            case 'active':
                return tasks.filter((task) => !task.done);
            default:
                return tasks;
        }
    }

    render() {
        const {tasks, filter, searchText} = this.state;
        const done = tasks.reduce((num, task) => {
            return task.done ? num + 1: num
        }, 0);
        const todo = tasks.length - done;

        const visibleTasks = this.tasksSearch(this.tasksFilter(tasks, filter), searchText); 

        return (
            <React.StrictMode>
                <div className="todo-app">
                    <Header todo={todo} done={done} />
                    <div className="top-panel d-flex">
                        <SearchPanel onChangeSearchText={this.onChangeSearchText} />
                        <ItemFilter onChangeFilter={this.onChangeFilter} filter={filter} />
                    </div>
                    <TodoList 
                        items={ visibleTasks }
                        onDeleted={ this.deleteItem } 
                        onToggleDone={ this.onToggleDone }
                        onToggleImportant={ this.onToggleImportant } />
                    <ItemAddForm onAdd={ (label) => this.addItem(label) } />
                </div>
            </React.StrictMode>
        );
    }
}