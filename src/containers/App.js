import React, { Component } from 'react';
import Navigation from '../routes/navigation'
import Main from '../routes/main'
import '../static/css/App.css'



class App extends Component {
  render() {
    return (
      <div className = "app">
        <h1>Reminder Module</h1>
        <Navigation />
        <Main />
      </div>
    );
  }
}

export default App;
