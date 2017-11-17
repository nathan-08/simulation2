import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import router from './router'
import LogoutButton from './components/logoutButton'



class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar"><h3>Houser Dashboard</h3> <LogoutButton/></nav>
        {router}
      </div>
    );
  }
}

export default App;
