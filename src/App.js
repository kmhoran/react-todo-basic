import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import Deck from "./components/deck";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./store/index";


const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

class App extends Component {
  render() {
    return (
      <ReduxProvider store={reduxStore}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Todo Redux App</h1>
          </header>
          <Deck/>
        </div>
      </ReduxProvider>
    );
  }
}

export default App;
