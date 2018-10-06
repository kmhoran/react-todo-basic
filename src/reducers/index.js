import { combineReducers } from 'redux';
import DeckReducer from './DeckReducer';

const appReducer = combineReducers({
    deck: DeckReducer
})

export default appReducer;