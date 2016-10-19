import React, { Component } from 'react';
import Roll from './components/roll'
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Roller</h2>
        </div>
          <Roll title={"Clintowned."} youtubeIdentifier="akdzSFNa4XE" startTime="30" endTime="33" />
      </div>
    );
  }
}

export default App;
