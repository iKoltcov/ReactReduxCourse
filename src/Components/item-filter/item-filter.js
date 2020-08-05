import React, {Component} from 'react';

import './item-filter.css';

export default class ItemFilter extends Component {    
    state = {
        //TODO[IK] Investigate how we can use enum in js
        filter: 'all'
    };

    setFilter(filter) {
        if(filter === 'all' || filter === 'active' || filter === 'done') {
            this.props.onChangeFilter(filter);
            this.setState({filter: filter})
        }
    }

    getButtonClasses(filter) {
        const defaultClasses = "btn btn-outline-secondary";
        const chosenClasses = "btn btn-info";

        return this.state.filter === filter ? chosenClasses : defaultClasses
    }

    render(){
        return (
            <div className="btn-group">
                <button type="button" className={this.getButtonClasses('all')} onClick={() => this.setFilter('all')}>All</button>
                <button type="button" className={this.getButtonClasses('active')} onClick={() => this.setFilter('active')}>Active</button>
                <button type="button" className={this.getButtonClasses('done')} onClick={() => this.setFilter('done')}>Done</button>
            </div>
        );
    }
}