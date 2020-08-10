import React, {Component} from 'react'

import "./search-panel.css";

export default class SearchPanel extends Component {
    state = {
        term: ''
    }

    onChange = (event) => {
        this.setState({ term: event.target.value });
        this.props.onChangeSearchText(event.target.value);
    }

    render()
    {
        return (
            <input 
                type="text"
                className="search-form form-control"
                onChange={this.onChange}
                value={this.state.term} />
        );
    }
}