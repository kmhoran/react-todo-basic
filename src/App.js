import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import listApi from './services/homesite/listApi';
import actionTypes from './constants/actionTypes';
import DeckActions from './actions/deckActions';


import Deck from "./components/deck";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./store/index";
import deck from './components/deck';


const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

class App extends Component {
  componentDidMount = async () =>{
    
    const callback = (context) => {
      const{error,decks} = context;
      if(error) console.log("[app] fetching went wrong: ", error);
      reduxStore.dispatch(DeckActions.populateLists(decks));
    }

    await listApi.GetAllLists(callback);
}
  render() {
    return (
      <ReduxProvider store={reduxStore}>
        <div className="App">
          <Deck/>
        </div>
      </ReduxProvider>
    );
  }
}

export default App;
