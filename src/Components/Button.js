import React from 'react';
import { Component } from 'react';

import '../Styles/Button.css'

class Button extends Component {
    mouseOver(event) {
        event.target.style.background = '#6200ee';    
    }

    mouseOut(event) {
        event.target.style.background = '#ffffff';    
    }

    render(){
        return (
            <div class='button' onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
                Button!
            </div>
        );
    }
}

export default Button;