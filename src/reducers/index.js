import { combineReducers } from 'redux';
import DeckReducer from './deckReducer';

const appReducer = combineReducers({
    deck: DeckReducer
})

export default appReducer;