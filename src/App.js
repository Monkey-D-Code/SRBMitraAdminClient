import React, { Component } from 'react';
import './App.css';

// IMPORTING ELEMENTS
import NavigationBar from './Elements/NavigationBar/NavigationBar';

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavigationBar />
      </div>
      
    );
  }
}

export default App;
