import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const state = combineReducers(reducers);

const devTools = composeWithDevTools(applyMiddleware(thunk));

export default createStore(state, devTools);
