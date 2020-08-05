import React, {Component} from 'react';

import './item-filter.css';

export default class ItemFilter extends Component {    
    setFilter(filter) {
        if(filter === 'all' || filter === 'active' || filter === 'done') {
            this.props.onChangeFilter(filter);
        }
    }

    getButtonClasses(filter) {
        const defaultClasses = "btn btn-outline-secondary";
        const chosenClasses = "btn btn-info";

        return this.props.filter === filter ? chosenClasses : defaultClasses
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