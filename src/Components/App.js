import React from 'react';
import { Component } from 'react';
import Header from './Header.js';
import Button from './Button.js';

class App extends Component {
  render(){
    return (
      <div>
        <Header/>
        <Button/>
        <Button/>
        <Button/>
      </div>
    );
  }
}

export default App;
