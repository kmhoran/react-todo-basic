
import { createStore, applyMiddleware } from "redux";
// Logger with default options
import logger from "redux-logger";
import appReducer from "../reducers/index";
export default function configureStore(initialState) {
  const store = createStore(appReducer, initialState, applyMiddleware(logger));
  return store;
}