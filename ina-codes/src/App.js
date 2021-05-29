// import logo from './logo.svg';
// import './App.css';
import React from "react";
import Nav from './Nav';
import Routes from './Routes'

export default class App extends React.Component {
  render(){
    return (
      <div className="App">
      <Nav />
      <Routes />
      </div>
    )
  }
  
}


