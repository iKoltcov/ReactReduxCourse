import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="d-flex">
                <h1>StarWars DB</h1>
                <div>
                    <span>Characters</span>
                    <span>Starships</span>
                    <span>Planets</span>
                </div>
            </div>
        );
    }
}