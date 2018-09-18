import React, { Component } from 'react';
import Login from './containers/Login/Login';
import Homepage from './containers/Homepage/Homepage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Login/> */}
        <Homepage/>
      </div>
    );
  }
}

export default App;
