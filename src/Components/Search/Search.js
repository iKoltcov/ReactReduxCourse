import React, {Component} from 'react'

import "./search.css";

export default class Search extends Component {
    state = {
        searchText: ''
    }

    onChange = (event) => {
        this.setState({
            searchText: event.target.value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onChangeSearchText(this.state.searchText);
    }

    render()
    {
        return (
            <form className='search-form' onSubmit={this.onSubmit} >
                <input type="text" className="form-control" onChange={this.onChange} value={this.props.searchText} />
            </form>
        );
    }
}