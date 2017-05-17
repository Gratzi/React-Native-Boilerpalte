import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import nav from './reducers/nav';

export default createStore(
  combineReducers({
    nav //,
    // visibilityFilter
  }),
  {},
  applyMiddleware(logger())
)
