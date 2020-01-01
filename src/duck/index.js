import { createStore, combineReducers } from 'redux';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const state = combineReducers(reducers);

const devTools = composeWithDevTools();

export default createStore(state, devTools);
