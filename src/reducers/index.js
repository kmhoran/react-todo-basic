import { combineReducers } from 'redux';
import todoReducer from './todoReducer';

const appReducer = combineReducers({
    todo: todoReducer
})

export default appReducer;