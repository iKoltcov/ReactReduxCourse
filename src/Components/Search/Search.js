import React, {Component} from 'react'

import "./search.css";

export default class Search extends Component {
    render()
    {
        return (
            <input type="text" 
                className="form-control search-input"></input>
        );
    }
}