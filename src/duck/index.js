import { createStore, combineReducers } from 'redux';
import { board } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const state = combineReducers({
  board,
});

const devTools = composeWithDevTools();

export default createStore(state, devTools);
