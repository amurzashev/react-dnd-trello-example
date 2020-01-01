import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const state = combineReducers(reducers);

const devTools = composeWithDevTools(applyMiddleware(thunk));

const configureStore = preloadedState => createStore(state, preloadedState, devTools);

export default configureStore;
